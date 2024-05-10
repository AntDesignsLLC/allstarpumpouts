import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export function CardService({service, image}) {
  return (
    <Card className="mt-6 w-50">
      <CardHeader color="blue-gray" className="relative h-50">
        <img
          src={`/allstarpumpouts/images/serviceCard/${image}`}
          alt="card-image"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {service}
        </Typography>
      </CardBody>
    </Card>
  );
}
