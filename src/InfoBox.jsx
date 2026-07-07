import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({ info }) {
    
  return (
    <div className="info-box">
      
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            sx={{ height: 140 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {info.city}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                <div>Temperature = {info.temp}&deg;C</div>
                <div>humidity = {info.humidity}</div>
                <div>Pressure = {info.pressure}</div>
                <div>Feels Like = {info.feelslike}&deg;C</div>

            </Typography>
        </CardContent>
        
        </Card>
        </div>
    </div>
  );
}