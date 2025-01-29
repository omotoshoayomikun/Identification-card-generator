"use client";

import React from "react";
import PageContainer from "../../components/container/PageContainer";
import BlankCard from "../../components/shared/BlankCard";
import { CardContent } from "@mui/material";
import Image from "next/image";

function page() {
  return (
    <PageContainer
      title="Identification Card Page"
      description="this is Identification Card Page"
    >
      <BlankCard>
        <CardContent>
          <div className="w-[600px] h-[400px] ml-auto mr-auto border-2 border-solid border-gray-400">
            <div className="mx-[34px] my-[30px]  gap-[15px] flex justify-between">
              <div>
                <Image src="" alt="logo image" />
              </div>
              <div>
                <h1 className="text-green-700 text-3xl font-extrabold leading-7">ABEOKUTA SOUTH</h1>
                <h1 className="text-green-700 text-xl font-extrabold leading-7">LOCAL GOVERNMENT</h1>
                <h6 className="text-xs">
                  A.S.LG Secretariat, P.M.B 2006, Ake, Abeokuta, Ogun State,
                  Nigeria.
                </h6>
              </div>
              <div>
                <Image src="" alt="logo image" />
              </div>
            </div>

            <div className="mx-[30px] flex gap-[15px]">
              <div className="flex-1">
                <Image src="" alt="logo image" />
                <div>NIN / BVN</div>
                <div>0000 1000 1100 1110</div>
              </div>
              <div className="flex-2">
                <div className="mb-3">
                  <div className="text-xs">Name</div>
                  <div className="text-xl font-bold leading-[15px]">
                    Messiah David Louze
                  </div>
                </div>
                <div className="mb-3">
                  <div className="text-xs">Address</div>
                  <div className="text-[0.95rem] font-bold leading-[15px]">
                    Ijemo Agbadu, Ijemo, Abeokuta
                  </div>
                </div>
                <div className="flex gap-[40px] mb-3">
                  <div className="w-[100px]">
                    <div className="text-xs">Date of Birth</div>
                    <div className="text-[0.95rem] font-bold leading-[15px]">
                      1991/09/21
                    </div>
                  </div>
                  <div className="">
                    <div className="text-xs">Emergency Contact</div>
                    <div className="text-[0.95rem] font-bold leading-[15px] text-right">
                      0803 456 7890
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mb-3">
                  <div className="">
                    <div className="text-xs">Branch</div>
                    <div className="text-[0.95rem] font-bold leading-[15px]">
                      Isapon
                    </div>
                  </div>
                  <div className="">
                    <div className="text-xs">Plate Number</div>
                    <div className="text-[0.95rem] font-bold leading-[15px]">
                      FKJ-254XA
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mb-3">
                  <div className="">
                    <div className="text-xs">Unit</div>
                    <div className="text-[0.95rem] font-bold leading-[15px]">
                      #20202020
                    </div>
                  </div>
                  <div className="">
                  <div className="text-xs">Union Name</div>
                    <div className="text-[0.95rem] font-bold leading-[15px]">
                    ACOMORAN
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-[0.6]">hello</div>
            </div>
          </div>
        </CardContent>
      </BlankCard>
    </PageContainer>
  );
}

export default page;
