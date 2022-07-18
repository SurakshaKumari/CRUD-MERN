import React from "react";
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Details = () => {
    return (
        <div className="container mt-3">
            <h1 style={{ fontWeight: 400 }}>Welcome Suraksha</h1>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className="add_btn">
                    <button className="btn btn-primary mx-2"><CreateIcon /></button>
                        <button className="btn btn-danger"><DeleteOutlineIcon /></button>
                    </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                            <h3 className="mt-3">Name: <span>suri</span></h3>
                            <p className="mt-3"><MailOutlineIcon />Email: <span>surakshak571@gmail</span></p>
                            
    
                        </div>
                       
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}



export default Details;