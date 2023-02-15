import styled from 'styled-components'

export const PaintingsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const PaintingWrapper = styled.div`
  margin: 5px;
  width: 450px;
`
export const Painting = styled.img`
  object-fit: cover;
  width: 100%;
  border: 1px solid black;
  background-color: white;
`

export const UserEmail = styled.div`
  text-align: center;
  font-size: 18px;
  padding-bottom: 10px;
`

export const FormControlWrapper = styled.div`
  width: 350px;
  text-align: center;
  margin: 0 auto 25px;
`
