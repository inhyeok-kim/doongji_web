import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

interface Props {
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
}
export default function GlassWidget({
    children,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    padding = '15px 25px',
    paddingLeft,
    paddingRight,
    paddingBottom,
    paddingTop,
    position,
    top,
    left,
    right,
    bottom,
} : Props){
    return (
        <Grid2
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
                background: "rgba( 255, 255, 255, 0.2 )",
                boxShadow: '0px 1px 20px 0 rgb(31 38 135 / 10%);',
                backdropFilter: 'blur( 4px )',
                WebkitBackdropFilter : 'blur( 4px )',
                borderRadius: '25px',
                borderTop : '1px solid rgba( 255, 255, 255, 0.5 )',
                textShadow : '0px 0px 1px gray;'
            }}
        >
            {children}
        </Grid2>
    )
}