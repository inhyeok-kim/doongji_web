import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { blueGrey } from "@mui/material/colors";

interface Props {
    xs? : number
    children? : React.ReactNode
    width? : string,
    minWidth? : string,
    maxWidth? : string,
    height? : string,
    minHeight? :string,
    maxHeight? : string
    padding? : string
    paddingLeft? : string
    paddingRight? : string
    paddingBottom? : string
    paddingTop? : string
    position? : 'absolute' | 'relative' | 'fixed'
    top? : string | number
    left? : string | number
    right? : string | number
    bottom? : string | number
    margin? : string
    marginLeft? : string
    marginRight? : string
    marginBottom? : string
    marginTop? : string
    title? : string
}
export default function GlassWidget({
    children,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    padding = '20px 25px 15px 25px',
    paddingLeft,
    paddingRight,
    paddingBottom,
    paddingTop,
    position,
    top,
    left,
    right,
    bottom,
    margin,
    marginLeft,
    marginRight,
    marginBottom,
    marginTop,
    xs,
    title
} : Props){
    return (
        <Grid2
            xs={xs}
            margin = {margin}
            marginLeft = {marginLeft}
            marginRight = {marginRight}
            marginBottom= {marginBottom}
            marginTop = {marginTop}
            top = {top}
            left = {left}
            right = {right}
            bottom = {bottom}
            position={position}
            paddingLeft = {paddingLeft}
            paddingRight = {paddingRight}
            paddingBottom = {paddingBottom}
            paddingTop = {paddingTop}
            padding={padding}
            minHeight={minHeight}
            minWidth={minWidth}
            width={width}
            maxWidth={maxWidth}
            height={height}
            maxHeight={maxHeight}
            sx={{
                boxSizing : 'border-box',
                background: "rgba( 255, 255, 255, 0.2 )",
                boxShadow : '-1px 1px 20px rgba(205, 205,205, 0.5)',
                backdropFilter: 'blur( 5px )',
                WebkitBackdropFilter : 'blur( 5px )',
                borderRadius: '25px',
                border : '2px solid rgba( 255, 255, 255, 0.3 )',
                textShadow : '0px 0px 1px gray;'
            }}
        >
            {title ? 
                <Typography variant="h6" color={blueGrey[700]}>
                    {title}
                </Typography>
                :''
            }
            {children}
        </Grid2>
    )
}