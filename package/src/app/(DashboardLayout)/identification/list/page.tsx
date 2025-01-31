"use client";

import React, { useEffect, useState } from "react";
import PageContainer from "../../components/container/PageContainer";
import axios from "axios";
import BlankCard from "../../components/shared/BlankCard";
import { CardContent } from "@mui/material";
import { Button } from "@mui/material";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { generateIdCardHTML } from "@/utils/PrintDom";
import { User } from "../../../api/user/models/User";
import { CgSpinner } from "react-icons/cg";
import { ToastOption } from "@/app/lib/Data";
import { toast } from "react-toastify";

function List() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get("/api/user");
        if (response.status === 200) {
          setUsers(response.data.data);
          setLoading(false);
        } else {
          setLoading(false);
          console.error("Failed to fetch users", response.statusText);
          toast.error("An Error Occur!!! Try Again!!!", ToastOption);
        }
      } catch (error) {
        setLoading(false);
        toast.error("An Error Occur!!! Try Again!!!", ToastOption);
        console.error("Error fetching users", error);
      }
    };

    fetchUsers();
  }, []);

  const idCardData = {
    localGovt: "ABEOKUTA SOUTH",
    localGovtSub: "LOCAL GOVERNMENT",
    address:
      "A.S.LG Secretariat, P.M.B 2006, Ake, Abeokuta, Ogun State, Nigeria.",
    name: "Messiah David Louze",
    residence: "Ijemo Agbadu, Ijemo, Abeokuta",
    dob: "1991/09/21",
    contact: "0803 456 7890",
    nin: "0000 1000 1100 1110",
    branch: "Isapon",
    plateNumber: "FKJ-254XA",
    unit: "#20202020",
    union: "ACOMORAN",
    bikeColor: "RED",
    photo: "/images/identification/jihon.JPG",
    qrCode: "/images/identification/qrcode.jpeg",
  };

  const printIdCard = async (user: User) => {
    const printContent = await generateIdCardHTML(user);
    const newWindow = window.open("", "");
    if (newWindow) {
      newWindow.document.write(printContent);
      newWindow.document.close();
    }
  };

  return (
    <PageContainer
      title="Identification Card Register Page"
      description="this Card Register Page"
    >
      <h1 className="mb-[20px] text-3xl font">Identification Page</h1>
      <BlankCard>
        <CardContent>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Full Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Date of Birth
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Plate Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Unit
                  </th>
                  <th scope="col" className="px-6 py-3 text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={5} className="px-6 py-4 text-center">
                      <div className="flex justify-center items-center flex-col w-full h-[200px]">
                        <div className="">
                          <CgSpinner size={50} className="animate-spin" />
                        </div>
                        <div className="2xl font-bold">Loading...</div>
                      </div>
                    </td>
                  </tr>
                ) : (
                  users.map((user) => (
                    <tr
                      key={user.id}
                      className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {`${user.firstName} ${user.lastName}`}
                      </th>
                      <td className="px-6 py-4">{user.dateOfBirth}</td>
                      <td className="px-6 py-4">{user.plateNumber}</td>
                      <td className="px-6 py-4">{user.unit}</td>
                      <td className="px-6 py-4 flex gap-4">
                        <Button
                          variant="contained"
                          color="success"
                          size="small"
                        >
                          <VisibilityIcon /> View
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          size="small"
                        >
                          <EditIcon /> Edit
                        </Button>
                        <Button
                          variant="contained"
                          color="info"
                          size="small"
                          onClick={() => printIdCard(user)}
                        >
                          <FingerprintIcon /> Print
                        </Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </BlankCard>
    </PageContainer>
  );
}

export default List;
