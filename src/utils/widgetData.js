import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import {AccountBalanceOutlined, MonetizationOnOutlined, ShoppingCartOutlined} from "@mui/icons-material";


const data = [
  {
    title: 'USERS',
    isMoney: false,
    link: 'See all users',
    icon: <PersonOutlineOutlinedIcon className='icon' style={{
      color: 'crimson',
      backgroundColor: 'rgba(255,0,0,.2)'
    }}/>
  },
  {
    title: 'ORDERS',
    isMoney: false,
    link: 'View all orders',
    icon: <ShoppingCartOutlined className='icon' style={{
      color: 'goldenrod',
      backgroundColor: 'rgba(218,165,32,.2)'
    }}/>
  },
  {
    title: 'EARNINGS',
    isMoney: false,
    link: 'View net earnings',
    icon: <MonetizationOnOutlined className='icon' style={{
      color: 'green',
      backgroundColor: 'rgba(0,128,0,.2)'
    }}/>
  },

  {
    title: 'BALANCE',
    isMoney: false,
    link: 'See details',
    icon: <AccountBalanceOutlined className='icon' style={{
      color: 'purple',
      backgroundColor: 'rgba(128,0,128,.2)'
    }}/>
  }
]
export default data;