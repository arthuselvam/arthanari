import { Drawer } from "@mui/material";
import SideBarContent from "./SideBarContent";


// const styledDrawer = Styled(Drawer) ({
//     marginTop:54,
// })

const SideBar = ({openDrawer}) => {

    return(
        <Drawer
            anchor='left'
            open={openDrawer}
            hideBackdrop={true}
            ModalProps={{
                keepMounted: true
            }}
            varient="persistent"
            sx={{
                '& .MuiDrawer-paper': {
                    marginTop: '64px',
                    width: 250,
                    background: '#F5F5F5',
                    borderRight: 'none',
                    height: 'calc(100vh - 64px)'
                }
            }}

        >

            <SideBarContent />
            
        </Drawer>
    )
}

export default SideBar;