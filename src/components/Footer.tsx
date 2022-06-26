import SocialMedia from './SocialMedia';
import Link from '@mui/material/Link'
import {Typography,CssBaseline} from '@mui/material';

function Footer(){
    return(
        <div>
            <CssBaseline/>
            <span>
            <SocialMedia/>
            </span>
             <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit">
                web2
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
        </div>
    )
}
export default Footer;