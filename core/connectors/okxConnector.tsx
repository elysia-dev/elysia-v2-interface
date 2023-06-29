import { initializeConnector } from '@web3-react/core'
// import { OkxConnector } from 'src/core/connectors/okx-connector'
import { OkxWallet } from './okx-connector/okxConnector'

export const [okxWallet, hooks] = initializeConnector<OkxWallet>(
  (actions) => new OkxWallet({ actions }),
)

export default {}
