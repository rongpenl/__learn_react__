import React from 'react';
import moment from 'moment';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom'


function RenderComments(comments) {
    console.log(comments);
    const commentList = comments.map((comment) => {
        return (
            <div key={comment.id}>
                <div className="mt-2">
                    <li className="mt-1">{comment.comment}</li>
                    <li> --  {comment.author}, {moment(comment.date).format("MMM Do YY")}</li>
                </div>
            </div>
        );
    });

    return (
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <div className="list-unstyled">
                {commentList}
            </div>
        </div>
    )
}

function RenderDish(dish) {
    console.log(dish);
    return (
        <Card>
            <CardImg width="100%" top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>
                    {dish.description}
                </CardText>
            </CardBody>
        </Card>
    );
}

const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                    </div>
                </div>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    {/* <div className="col-12 col-md-5 m-1">

                    </div> */}
                    <RenderComments comments={props.comments} />
                </div>
            </div >
        );
    }
    else {
        return (
            <div></div>
        )
    };
}



export default DishDetail;