import { Symbol } from '@keyring/defaults' 
import { KeyringStruct } from '@keyring/types'; 
import StafiKeyring from './stafi/index'; 

export class Keyring {

  public init(symbol: string): KeyringStruct {
    switch (symbol) { 
      case Symbol.Fis:
        return new StafiKeyring(); 
      default: 
        return new StafiKeyring();
    }
  }

}

const keyringInstance = new Keyring();

export default keyringInstance;