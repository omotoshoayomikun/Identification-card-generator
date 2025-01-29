"use client";

import React, { useRef, useState} from "react";
import PageContainer from "../../components/container/PageContainer";
import {
  Button,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import BlankCard from "../../components/shared/BlankCard";

function Create() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isCameraOn, setIsCameraOn] = useState(false);
  // const [capturedImage, setCapturedImage] = useState("");

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    dateOfBirth: "",
    branch: "",
    plateNumber: "",
    emergencyContact: "",
    unit: "",
    unionName: "",
    ninBvn: "",
    address: "",
    image: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

console.log(formValues)

  const handleStartCamera = async () => {
    if (!isCameraOn) {
      // setCapturedImage("");
      setFormValues({ ...formValues, image: "" })
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setIsCameraOn(true);
    } else {
      if (videoRef.current) {
        // const stream = videoRef.current.srcObject as MediaStream;
        // const track = stream.getTracks()[0];
        // track.stop();
        const canvas = document.createElement("canvas");
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
          const imageDataUrl = canvas.toDataURL("image/jpeg");
          // setCapturedImage(imageDataUrl);
          setFormValues({ ...formValues, image: imageDataUrl })
          console.log(imageDataUrl); // You can handle the captured image data URL here
        }
        videoRef.current.srcObject = null;
      }
      setIsCameraOn(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    // const errors: { [key: string]: string } = {};

    // Object.keys(formValues).forEach((key) => {
    //   if (!formValues[key as keyof typeof formValues]) {
    //     errors[key] = `${key} is required`;
    //   }
    // });

    // if (Object.keys(errors).length > 0) {
    //   console.log("Form validation errors:", errors);
    //   return;
    // }

    // // Proceed with form submission
    // console.log("Form submitted successfully", formValues);
  };

  return (
    <PageContainer
      title="Identification Card Register Page"
      description="this Card Register Page"
    >
      <h1 className="mb-[20px] text-3xl font">Identification Page</h1>
      <BlankCard>
        <CardContent>
          <form noValidate autoComplete="off"  onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item sm={3}>
                <div className="w-full h-[205px] border-[1px] border-solid border-[rgb(188, 188, 188)] mb-4">
                  {
                    formValues.image ? (
                      <img src={formValues.image} alt="Captured" className="w-[100%] h-full border" />
                    ) : (
                      <video crossOrigin="anonymous" ref={videoRef} autoPlay className="h-full"></video>
                    )
                  }
                </div>
                <div className="flex justify-center">
                  {/* <Button variant="contained">Select File</Button> */}
                  <Button variant="contained" color="success" onClick={handleStartCamera}>{isCameraOn ? "Capture" : "Start Camera"}</Button>
                </div>
              </Grid>
                <Grid item sm={9}>
                <Grid container spacing={2} className="mb-4">
                  <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    name="firstName"
                    value={formValues.firstName}
                    onChange={handleInputChange}
                  />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    name="lastName"
                    value={formValues.lastName}
                    onChange={handleInputChange}
                  />
                  </Grid>
                </Grid>

                <Grid container spacing={2} className="mb-4">
                  <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Middle Name"
                    variant="outlined"
                    name="middleName"
                    value={formValues.middleName}
                    onChange={handleInputChange}
                  />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Date of Birth"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    name="dateOfBirth"
                    value={formValues.dateOfBirth}
                    onChange={handleInputChange}
                  />
                  </Grid>
                </Grid>
                <Grid container spacing={2} className="mb-4">
                  <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Branch"
                    variant="outlined"
                    name="branch"
                    value={formValues.branch}
                    onChange={handleInputChange}
                  />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Plate Number"
                    variant="outlined"
                    name="plateNumber"
                    value={formValues.plateNumber}
                    onChange={handleInputChange}
                  />
                  </Grid>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Emergency Contact"
                    variant="outlined"
                    name="emergencyContact"
                    value={formValues.emergencyContact}
                    onChange={handleInputChange}
                  />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Unit"
                    variant="outlined"
                    name="unit"
                    value={formValues.unit}
                    onChange={handleInputChange}
                  />
                  </Grid>
                </Grid>
                </Grid>

                <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  label="Union Name"
                  variant="outlined"
                  name="unionName"
                  value={formValues.unionName}
                  onChange={handleInputChange}
                />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  label="NIN/BVN"
                  variant="outlined"
                  name="ninBvn"
                  value={formValues.ninBvn}
                  onChange={handleInputChange}
                />
                </Grid>
                <Grid item xs={12} sm={4}>
                <TextField
                  required
                  fullWidth
                  label="Address"
                  variant="outlined"
                  name="address"
                  value={formValues.address}
                  onChange={handleInputChange}
                />
                </Grid>
              <Grid item xs={12}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </BlankCard>
    </PageContainer>
  );
}

export default Create;
