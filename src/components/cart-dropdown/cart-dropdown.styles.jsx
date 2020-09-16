import styled from 'styled-components'
import CustomButton from '../custom-button/custom-button.component'

export const CartItemsContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  overflow: hidden scroll;
`

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`
export const DropdownButton = styled(CustomButton)`
  margin-top: auto;
`

export const CartDropdownContainer = styled.span`
  position: absolute;
  width: 280px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`
