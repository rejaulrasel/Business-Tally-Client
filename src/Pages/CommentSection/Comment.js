import { Avatar, Typography, Box, Rating } from "@mui/material";
import { } from "@mui/system";
import React from "react";

const Comment = ({ review }) => {



    return (
        <Box sx={{ mb: 5 }}>
            <Box className="d-flex justify-content-start align-items-center gap-2">
                <Avatar></Avatar>
                <Typography className="text-primary">{review?.name}</Typography>
            </Box>
            <Box sx={{ ml: 2 }}>
                <Typography component="legend">
                    Rating {review.rating} out of 5
                </Typography>
                <Rating
                    name="read-only"
                    value={review?.rating}
                    readOnly
                    precision={0.5}
                />
            </Box>
            <Box
                className="bg-primary text-light"
                sx={{ boxShadow: 3 }}
                style={{ width: "75%", padding: 14, borderRadius: 10, margin: 8 }}
            >
                <Typography>{review.comment}</Typography>
            </Box>
        </Box>

    );
};

export default Comment;