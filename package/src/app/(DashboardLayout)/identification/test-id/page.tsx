"use client";

import React from "react";
import PageContainer from "../../components/container/PageContainer";
import BlankCard from "../../components/shared/BlankCard";
import { CardContent } from "@mui/material";
import Image from "next/image";
import styles from "../id-card/IdCard.module.css";
function page() {
  return (
    <PageContainer
    title="Identification Card Page"
    description="this is Identification Card Page"
  >
    <BlankCard>
      <CardContent>
        <div className="w-[600px] h-auto ml-auto mr-auto border-[1px] border-solid border-gray-400">
          <div className={`px-[34px] py-[20px] pb-[15px] gap-[15px] flex justify-between relative ${styles.top_watermark}`} >
            <div className="relative w-[65px] h-[65px]">
              <Image
                src="/images/identification/abeokuta_logo.png"
                fill
                alt="logo image"
              />
            </div>
            <div>
              <h1 className="text-green-700 text-3xl font-extrabold leading-7">
                ABEOKUTA SOUTH
              </h1>
              <h1 className="text-green-700 text-2xl font-extrabold leading-7">
                LOCAL GOVERNMENT
              </h1>
              <h6 className="text-[10px] font-bold">
                A.S.LG Secretariat, P.M.B 2006, Ake, Abeokuta, Ogun State,
                Nigeria.
              </h6>
            </div>
            <div className="relative w-[65px] h-[65px]">
              <Image
                src="/images/identification/abeokuta_logo.png"
                fill
                alt="logo image"
              />
            </div>
          </div>
          <div className="w-full h-1 bg-green-500"></div>
          <div className="w-full h-1 bg-yellow-300"></div>

          <div
            className={`px-[30px] py-6 flex align-bottom gap-[15px] relative overflow-hidden ${styles.bottom_watermark}`}
          >
            <div className="flex-[0.9] relative  z-50">
              <div className="relative w-[140px] h-[160px] mb-4">
                <Image
                  src="/images/identification/jihon.JPG"
                  fill
                  alt="logo image"
                />
              </div>
              <div className="">
                <div className="text-xs">NIN / BVN</div>
                <div className="text-[0.75rem] font-bold leading-[15px]">
                  0000 1000 1100 1110
                </div>
              </div>
            </div>
            <div className="flex-[1.9] relative  z-50">
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
              <div className="flex gap-[30px] mb-3">
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
              <div className="flex gap-[30px] mb-3">
                <div className="w-[100px]">
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
              <div className="flex gap-[30px] mb-3">
                <div className="w-[100px]">
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
            <div className="flex-[0.8] h-[min-content] z-50 relative self-end">
              <div className="text-xs text-center">ASLG</div>
              <div className="w-full h-[100px] relative">
                <Image src="/images/identification/qrcode.jpeg" alt="" fill />
              </div>
              <div className="text-[10px] text-center">
                COLOR (BIKE): <span className="font-bold">RED</span>
              </div>
            </div>
            <div className="absolute w-[220px] h-[220px] m-auto right-[140px] top-[20px]  opacity-15">
              <Image src="/images/identification/abeokuta_logo.png" alt="" fill />
            </div>
          </div>
        </div>
      </CardContent>
    </BlankCard>
  </PageContainer>
  );
}

export default page;
