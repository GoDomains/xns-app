import { gql, useQuery } from '@apollo/client'
import { useTranslation } from 'react-i18next'

const HOME_DATA = gql`
  query getHomeData($address: string) @client {
    network
    displayName(address: $address)
    isReadOnly
    isSafeApp
  }
`

const GET_ACCOUNT = gql`
  query getAccounts @client {
    accounts
  }
`

const useHomeData = ({ match }) => {
  const { url } = match
  const { t } = useTranslation()

  const {
    data: { accounts }
  } = useQuery(GET_ACCOUNT)

  const {
    data: { network, displayName, isReadOnly, isSafeApp }
  } = useQuery(HOME_DATA, {
    variables: { address: accounts?.[0] }
  })
  console.log('data ====>', network, displayName, isReadOnly, isSafeApp)
  return { network, displayName, isReadOnly, isSafeApp }
}

export default useHomeData
// module.exports = useHomeData;
