import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../styles/loading.css";

function Loading() {
    return (
        <div>
            <Box sx={{ height: 80 ,margin: 10}}>
                <Typography>
                    <span class="loading">
                        <span>L</span>
                        <span>o</span>
                        <span>a</span>
                        <span>d</span>
                        <span>i</span>
                        <span>n</span>
                        <span>g</span>
                    </span>
                </Typography>
                {/*ただのグルグルマーク（動きあり）*/}
                <CircularProgress />
            </Box>
        </div>
    );
}

export default Loading;
