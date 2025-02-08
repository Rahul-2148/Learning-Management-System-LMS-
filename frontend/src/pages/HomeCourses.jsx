import React from "react";
import "../pages/HomeCourses.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const courses = [
  {
    title: "Web Development",
    description: "Build websites and apps.",
    image: "../../src/assets/img.jpg",
    price: "Free",
    reviews: 4.5,
  },
  {
    title: "Data Science",
    description: "Learn data analysis.",
    image:
      "../../src/assets/imggg.jpg",
    price: "₹3,499",
    reviews: 4.8,
  },
  {
    title: "Cybersecurity",
    description: "Secure digital systems.",
    image: "../../src/assets/imgg.jpg",
    price: "₹2,199",
    reviews: 4.3,
  },
  {
    title: "Project Management",
    description: "Manage projects like a pro.",
    image: "../../src/assets/coverandcourse.jpg",
    price: "Free",
    reviews: 4.7,
  },
  {
    title: "AI and ML Basics",
    description: "Learn Artificial Intelligence.",
    image:
      "../../src/assets/imggg.jpg",
    price: "₹2,999",
    reviews: 4.6,
  },
  {
    title: "Mobile App Development",
    description: "Create apps for Android and iOS.",
    image: "../../src/assets/imgg.jpg",
    price: "₹4,499",
    reviews: 4.2,
  },
  {
    title: "Graphic Design",
    description: "Master design principles.",
    image: "../../src/assets/coverandcourse.jpg",
    price: "Free",
    reviews: 4.4,
  },
  {
    title: "Digital Marketing",
    description: "Boost your marketing skills.",
    image:
      "../../src/assets/img.jpg",
    price: "₹1,599",
    reviews: 4.5,
  },
  {
    title: "Cloud Computing",
    description: "Understand cloud services.",
    image: "../../src/assets/coverandcourse.jpg",
    price: "₹3,499",
    reviews: 4.7,
  },
  {
    title: "Blockchain Basics",
    description: "Learn the blockchain essentials.",
    image:
      "../../src/assets/imggg.jpg",
    price: "₹2,499",
    reviews: 4.8,
  },
  {
    title: "Photography",
    description: "Capture stunning photos.",
    image: "../../src/assets/imgg.jpg",
    price: "Free",
    reviews: 4.1,
  },
  {
    title: "UI/UX Design",
    description: "Design user-friendly interfaces.",
    image: "../../src/assets/img.jpg",
    price: "₹1,999",
    reviews: 4.6,
  },
  {
    title: "Game Development",
    description: "Create engaging games.",
    image: "../../src/assets/imgg.jpg",
    price: "₹5,999",
    reviews: 4.9,
  },
  {
    title: "Python Programming",
    description: "Master Python coding.",
    image:
      "../../src/assets/imggg.jpg",
    price: "Free",
    reviews: 4.7,
  },
  {
    title: "Entrepreneurship",
    description: "Start your own business.",
    image: "../../src/assets/img.jpg",
    price: "₹2,299",
    reviews: 4.4,
  },
  {
    title: "Public Speaking",
    description: "Speak with confidence.",
    image:
      "../../src/assets/coverandcourse.jpg",
    price: "₹1,199",
    reviews: 4.3,
  },
];

const CourseCatalogue = () => {
  return (
    <Container className="py-3">
      <h1 className="text-center mb-4 mt-5" style={{ fontSize: "2.5rem", 
      fontWeight: "bold",
       }}>Explore Our Courses</h1>
      <p className="text-center text-muted mb-5">
        Browse through our catalog of professional courses designed to enhance
        your skills and career. Free and paid courses are available!
      </p>
      <Row className="gy-4">
        {courses.map((course, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card className="shadow-sm h-100">
              <Card.Img
                variant="top"
                src={course.image}
                alt={course.title}
                className="img-fluid"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text">{course.title}</Card.Title>
                <Card.Text className="text-muted flex-grow-1">
                  {course.description}
                </Card.Text>
                <div className="mt-3">
                  <span className="fw-bold">
                    {course.price === "Free" ? (
                      <span className="text-success">Free</span>
                    ) : (
                      <span>{course.price}</span>
                    )}
                  </span>
                  <span className="ms-3 text-warning">
                    {"⭐".repeat(Math.round(course.reviews))} (
                    {course.reviews.toFixed(1)})
                  </span>
                </div>
                {course.price === "Free" ? (
                  <Button className="mt-3 course">Enroll Now</Button>
                ) : (
                  <Button className="mt-3 course">Buy Now</Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CourseCatalogue;
