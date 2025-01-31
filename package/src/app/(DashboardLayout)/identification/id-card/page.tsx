"use client";

import React, { useRef } from "react";
import PageContainer from "../../components/container/PageContainer";
import BlankCard from "../../components/shared/BlankCard";
import { Button, CardContent } from "@mui/material";
import Image from "next/image";
import styles from "./IdCard.module.css";
function page() {


  return (
    <PageContainer
      title="Identification Card Page"
      description="this is Identification Card Page"
    >
      <BlankCard>
        <CardContent>
          <div className={styles.content}>
            <div
              className={`${styles.top_watermark}`}
            >
              <div className={styles.img_top}>
                <Image
                  src="/images/identification/abeokuta_logo.png"
                  fill
                  alt="logo image"
                />
              </div>
              <div>
                <h1 className={styles.title1}>
                  ABEOKUTA SOUTH
                </h1>
                <h1 className={styles.title2}>
                  LOCAL GOVERNMENT
                </h1>
                <h6 className={styles.subtext}>
                  A.S.LG Secretariat, P.M.B 2006, Ake, Abeokuta, Ogun State,
                  Nigeria.
                </h6>
              </div>
              <div className={styles.img_top}>
                <Image
                  src="/images/identification/abeokuta_logo.png"
                  fill
                  alt="logo image"
                />
              </div>
            </div>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div
              className={` ${styles.bottom_watermark}`}
            >
              <div className={styles.first_grid}>
                <div className={styles.first_img_grid}>
                  <Image
                    src="/images/identification/jihon.JPG"
                    fill
                    alt="logo image"
                  />
                </div>
                <div className="">
                  <div className={styles.nin_text}>NIN / BVN</div>
                  <div className={styles.nin_text2}>
                    0000 1000 1100 1110
                  </div>
                </div>
              </div>
              <div className={styles.second_grid}>
                <div className="">
                  <div className={styles.name_text}>Name</div>
                  <div className={styles.name_text2}>
                    Messiah David Louze
                  </div>
                </div>
                <div className="mb-1">
                  <div className={styles.smalltext}>Address</div>
                  <div className={styles.txtzz}>
                    Ijemo Agbadu, Ijemo, Abeokuta
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles.w_55}>
                    <div className={styles.smalltext}>
                      Date of Birth
                    </div>
                    <div className={styles.smalltext1}>
                      1991/09/21
                    </div>
                  </div>
                  <div className="">
                    <div className={styles.smalltext}>
                      Emergency Contact
                    </div>
                    <div className={styles.smalltext1}>
                      0803 456 7890
                    </div>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles.w_55}>
                    <div className={styles.smalltext}>Branch</div>
                    <div className={styles.smalltext1}>
                      Isapon
                    </div>
                  </div>
                  <div className="">
                    <div className={styles.smalltext}>
                      Plate Number
                    </div>
                    <div className={styles.smalltext1}>
                      FKJ-254XA
                    </div>
                  </div>
                </div>
                <div className={styles.box}>
                  <div className={styles.w_55}>
                    <div className={styles.smalltext}>Unit</div>
                    <div className={styles.smalltext1}>
                      #20202020
                    </div>
                  </div>
                  <div className="">
                    <div className={styles.smalltext}>Union Name</div>
                    <div className={styles.smalltext1}>
                      ACOMORAN
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.third_grid}>
                <div className={styles.ASLG}>
                  ASLG
                </div>
                <div className={styles.qrcode}>
                  <Image src="/images/identification/qrcode.jpeg" alt="" fill />
                </div>
                <div className={styles.bov_text}>
                  COLOR (BIKE): <span style={{fontWeight: 700}}>RED</span>
                </div>
              </div>
              <div className={styles.blur_image}>
                <Image
                  src="/images/identification/abeokuta_logo.png"
                  alt=""
                  fill
                />
              </div>
            </div>
          </div>
        </CardContent>
      </BlankCard>
    </PageContainer>
  );
}

export default page;
