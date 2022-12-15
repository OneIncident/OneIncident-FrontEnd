const app = require("../server/config/app");

let port = process.env.PORT || 3000;

app.listen(port, cb);

app.use(express.static('public'));
app.get('*',(req, res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'));
})