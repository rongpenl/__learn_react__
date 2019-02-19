import React from 'react';
import moment from 'moment';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';



function renderComments(comments) {
    const commentList = comments.map((comment) => {
        return (
            <div key={comment.id}>
                <div className="mt-2">
                    <li className="mt-1">{comment.comment}</li>
                    <li> --  {comment.author}, {moment(comment.date).format("MMM Do YY")}</li>
                </div>
            </div>
        );
    })

    return (
        <div className="container">
            <h4>Comments</h4>
            <div className="list-unstyled">
                {commentList}
            </div>
        </div>
    )


}

const DishDetail = (props) => {
    const dish = props.dish;
    if (dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>
                                    {dish.description}
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {renderComments(dish.comments)}
                    </div>
                </div>
            </div>
        );
    }
    else {
        return (
            <div></div>
        )
    };
}



export default DishDetail;