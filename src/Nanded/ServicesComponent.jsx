import React, { useState } from "react";
import styled from "styled-components";
import servicesData from "./servicesData.json";

const ServicesComponent = () => {
  const [serviceType, setServiceType] = useState("HomeServices");
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices = servicesData.services[serviceType] || [];

  return (
    <MainContainer>
      {/* Button Row */}
      <ButtonContainer>
        <Button onClick={() => setServiceType("HomeServices")}>
          Home Services
        </Button>
        <Button onClick={() => setServiceType("OnlineServices")}>
          Online Services
        </Button>
      </ButtonContainer>

      {/* Display Service Details if a service is selected */}
      {selectedService ? (
        <DetailsContainer>
          <ServiceImage
            src={selectedService.image}
            alt={selectedService.serviceName}
          />
          <ServiceTitle>{selectedService.serviceName}</ServiceTitle>
          <ServiceInfo>
            <strong>Provider:</strong> {selectedService.provider.shopName}
          </ServiceInfo>
          <ServiceInfo>
            <strong>Owner:</strong> {selectedService.provider.ownerName}
          </ServiceInfo>
          <ServiceInfo>
            <strong>Address:</strong> {selectedService.provider.address}
          </ServiceInfo>
          <ServiceInfo>
            <strong>Contact:</strong> {selectedService.provider.contact}
          </ServiceInfo>
          <ServiceInfo>
            <strong>Price:</strong> {selectedService.price}
          </ServiceInfo>
          <ServiceInfo>
            <strong>Description:</strong> {selectedService.description}
          </ServiceInfo>
          <DetailsButton onClick={() => setSelectedService(null)}>
            Back to Services
          </DetailsButton>
        </DetailsContainer>
      ) : (
        <CardContainer>
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              onClick={() => setSelectedService(service)}
            >
              <ServiceImage src={service.image} alt={service.serviceName} />
              <ServiceTitle>{service.serviceName}</ServiceTitle>
              <ServiceInfo>
                <strong>Provider:</strong> {service.provider.shopName}
              </ServiceInfo>
              <ServiceInfo>
                <strong>Price:</strong> {service.price}
              </ServiceInfo>
            </ServiceCard>
          ))}
        </CardContainer>
      )}
    </MainContainer>
  );
};
const MainContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 20px;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const ServiceCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.03);
  }
`;

const ServiceTitle = styled.h3`
  margin: 0;
  color: #333;
`;

const ServiceInfo = styled.p`
  margin: 5px 0;
  color: #555;
`;

const ServiceImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const DetailsContainer = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const DetailsButton = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
export default ServicesComponent;
