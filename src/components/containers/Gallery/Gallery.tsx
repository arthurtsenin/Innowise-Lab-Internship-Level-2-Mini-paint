import { FC, useEffect, useState, useMemo, useCallback } from 'react'
import { readPaintings } from '@/api/dbHelper'
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useTypedDispatch } from '@/hooks/useTypedDispatch'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { IUsersPaintings } from '@/types/types'
import { Loader } from '@/components/views/Loader/Loader'
import { showErrorGallery } from '@/components/views/toasts/showErrorGallery'
import {
  PaintingsContainer,
  PaintingWrapper,
  Painting,
  UserEmail,
  FormControlWrapper,
} from './Gallery.styles'

export const Gallery: FC = () => {
  const { usersPaintings } = useTypedSelector((state) => state.usersPaintings)
  const dispatch = useTypedDispatch()
  const [users, setUsers] = useState<Array<string>>([])
  const [filterUser, setfilterUser] = useState<string>('All')
  const [error, setError] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const uniqUsers: Array<string> = Array.from(new Set(users))

  const loadPaintings = useCallback(async () => {
    setError('')
    setIsLoading(true)
    try {
      await readPaintings(dispatch, setUsers)
      setIsLoading(false)
    } catch (e) {
      setIsLoading(false)
      setError((e as Error).message)
      showErrorGallery(error)
    } finally {
      setIsLoading(false)
    }
  }, [dispatch, error])

  useEffect(() => {
    loadPaintings()
  }, [loadPaintings])

  const setSelectUsers = () => (e: SelectChangeEvent<string>) => setfilterUser(e.target.value)

  const getUsersPaintings = useMemo(
    () => (usersPaintings: Array<IUsersPaintings>) => {
      return [...usersPaintings]
        .sort(
          (a: IUsersPaintings, b: IUsersPaintings) =>
            Number(new Date(b.paintCreatedAt)) - Number(new Date(a.paintCreatedAt)),
        )
        .map((userPaint: IUsersPaintings) => (
          <PaintingWrapper key={userPaint.paintUidd}>
            <UserEmail>{userPaint.userEmail}</UserEmail>
            <Painting src={userPaint.userPaint} alt="" />
          </PaintingWrapper>
        ))
    },
    [],
  )

  const getChoosenUserPaintings = useMemo(
    () => () => {
      const filterUsersPaintings = [...usersPaintings].filter(
        (userPaint: IUsersPaintings) => userPaint.userEmail && userPaint.userEmail === filterUser,
      )
      return getUsersPaintings(filterUsersPaintings)
    },
    [filterUser, getUsersPaintings, usersPaintings],
  )

  if (isLoading) {
    return <Loader loading={isLoading} />
  }

  return (
    <>
      <FormControlWrapper>
        <FormControl fullWidth>
          <Select autoFocus onChange={setSelectUsers()} defaultValue={'All'}>
            <MenuItem value={'All'}>{'All'}</MenuItem>
            {uniqUsers.map((user) => {
              return (
                <MenuItem key={user} value={user}>
                  {user}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </FormControlWrapper>
      <PaintingsContainer>
        {filterUser === 'All' ? getUsersPaintings(usersPaintings) : getChoosenUserPaintings()}
      </PaintingsContainer>
    </>
  )
}
