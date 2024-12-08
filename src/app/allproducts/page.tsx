import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <main className="mb-5">
        <div className="relative w-full h-auto">
          {/* Banner */}
          <div>
            <Image
              src="/Banner.svg"
              alt="Banner"
              width={1500}
              height={209}
              className="hidden tablet:block"
            />
            <Image
              src="/Banner.svg"
              alt="Banner"
              width={500}
              height={500}
              className="block tablet:hidden"
            />
          </div>
          <div className="flex gap-5 items-center justify-centert tablet:hidden mt-10 px-5">
            <Button className="w-[163px] h-[56px] bg-[#F9F9F9] text-black rounded-none hover:bg-[#2A254B] hover:text-white">Filters <Image src="/downArrow.svg" alt="Date added" width={16} height={16}/> </Button>
            <Button className="w-[163px] h-[56px] bg-[#F9F9F9] text-black rounded-none hover:bg-[#2A254B] hover:text-white">Sorting <Image src="/downArrow.svg" alt="Date added" width={16} height={16}/> </Button>
            </div>

          {/* Filters and Sorting */}
          <div className="hidden tablet:p-10 tablet:flex tablet:justify-between">
            {/* Filters */}
            <div>
              <ul className="flex gap-9">
                <li className="flex gap-2 items-center">
                  Category{" "}
                  <Image
                    src="/downArrow.svg"
                    alt="Category"
                    width={16}
                    height={16}
                  />
                </li>
                <li className="flex gap-2 items-center">
                  Product Type{" "}
                  <Image
                    src="/downArrow.svg"
                    alt="Product Type"
                    width={16}
                    height={16}
                  />
                </li>
                <li className="flex gap-2 items-center">
                  Price{" "}
                  <Image
                    src="/downArrow.svg"
                    alt="Price"
                    width={16}
                    height={16}
                  />
                </li>
                <li className="flex gap-2 items-center">
                  Brand{" "}
                  <Image
                    src="/downArrow.svg"
                    alt="Brand"
                    width={16}
                    height={16}
                  />
                </li>
              </ul>
            </div>

            {/* Sorting */}
            <div>
              <ul className="flex items-end gap-5">
                <li>Sorting by:</li>
                <li className="flex gap-2 items-center">
                  Date added{" "}
                  <Image
                    src="/downArrow.svg"
                    alt="Date added"
                    width={16}
                    height={16}
                  />
                </li>
              </ul>
            </div>
          </div>

          {/* Tablet and Desktop */}
          <div className="hidden mt-10 tablet:grid tablet:grid-cols-2 px-16 laptop-sm:grid-rows-3 laptop-sm:grid-cols-4 gap-3 tablet:gap-20 laptop-sm:gap-10 desktop:gap-5 relative">
            <div className="w-[305px] h-[465px] flex flex-col gap-4">
              <Image src="/chairTwo.svg" alt="" width={305} height={375} />
              <h4 className="font-clash font-normal text-[20px] text-[#2A254B]">
                The Dandy chair
              </h4>
              <p className="font-satochi font-normal text-[18px]">£250</p>
            </div>
            <div className="w-[305px] h-[465px] flex flex-col gap-4">
              <Image src="/VaseSet.svg" alt="" width={305} height={375} />
              <h4 className="font-clash font-normal text-[20px] text-[#2A254B]">
                Rustic Vase Set
              </h4>
              <p className="font-satochi font-normal text-[18px]">£155</p>
            </div>
            <div className="w-[305px] h-[465px] flex flex-col gap-4">
              <Image src="/vase.svg" alt="" width={305} height={375} />
              <h4 className="font-clash font-normal text-[20px] text-[#2A254B]">
                The Silky Vase
              </h4>
              <p className="font-satochi font-normal text-[18px]">£125</p>
            </div>
            <div className="w-[305px] h-[465px] flex flex-col gap-4">
              <Image src="/lamp.svg" alt="" width={305} height={375} />
              <h4 className="font-clash font-normal text-[20px] text-[#2A254B]">
                The Lucy Lamp
              </h4>
              <p className="font-satochi font-normal text-[18px]">£399</p>
            </div>
            <div className="w-[305px] h-[465px] flex flex-col gap-4">
              <Image src="/lamp.png" alt="" width={305} height={375} />
              <h4 className="font-clash font-normal text-[20px] text-[#2A254B]">
                The Dandy chair
              </h4>
              <p className="font-satochi font-normal text-[18px]">£250</p>
            </div>
            <div className="w-[305px] h-[465px] flex flex-col gap-4">
              <Image src="/vaseThree.svg" alt="" width={305} height={375} />
              <h4 className="font-clash font-normal text-[20px] text-[#2A254B]">
                Rustic Vase Set
              </h4>
              <p className="font-satochi font-normal text-[18px]">£155</p>
            </div>
            <div className="w-[305px] h-[465px] flex flex-col gap-4">
              <Image src="/stool.svg" alt="" width={305} height={375} />
              <h4 className="font-clash font-normal text-[20px] text-[#2A254B]">
                The Silky Vase
              </h4>
              <p className="font-satochi font-normal text-[18px]">£125</p>
            </div>
            <div className="w-[305px] h-[465px] flex flex-col gap-4">
              <Image src="/chairs.svg" alt="" width={305} height={375} />
              <h4 className="font-clash font-normal text-[20px] text-[#2A254B]">
                The Lucy Lamp
              </h4>
              <p className="font-satochi font-normal text-[18px]">£399</p>
            </div>
            <div className="w-[305px] h-[465px] flex flex-col gap-4">
              <Image src="/chairTwo.svg" alt="" width={305} height={375} />
              <h4 className="font-clash font-normal text-[20px] text-[#2A254B]">
                The Dandy chair
              </h4>
              <p className="font-satochi font-normal text-[18px]">£250</p>
            </div>
            <div className="w-[305px] h-[465px] flex flex-col gap-4">
              <Image src="/VaseSet.svg" alt="" width={305} height={375} />
              <h4 className="font-clash font-normal text-[20px] text-[#2A254B]">
                Rustic Vase Set
              </h4>
              <p className="font-satochi font-normal text-[18px]">£155</p>
            </div>
            <div className="w-[305px] h-[465px] flex flex-col gap-4">
              <Image src="/vase.svg" alt="" width={305} height={375} />
              <h4 className="font-clash font-normal text-[20px] text-[#2A254B]">
                The Silky Vase
              </h4>
              <p className="font-satochi font-normal text-[18px]">£125</p>
            </div>
            <div className="w-[305px] h-[465px] flex flex-col gap-4">
              <Image src="/lamp.svg" alt="" width={305} height={375} />
              <h4 className="font-clash font-normal text-[20px] text-[#2A254B]">
                The Lucy Lamp
              </h4>
              <p className="font-satochi font-normal text-[18px]">£399</p>
            </div>
          </div>
          {/* Mobile */}
          <div className="tablet:hidden mt-6 pl-4 grid grid-cols-2 grid-rows-2 items-center gap-4 relative">
            <div className="w-[163px] h-[288px] flex flex-col gap-2">
              <Image src="/VaseSet.svg" alt="" width={163} height={201} />
              <h4 className="font-clash font-normal text-[20px] text-[#2A254B]">
                Rustic Vase Set
              </h4>
              <p className="font-satochi font-normal text-[18px]">£155</p>
            </div>
            <div className="w-[163px] h-[288px] flex flex-col gap-2">
              <Image src="/lamp.svg" alt="" width={163} height={201} />
              <h4 className="font-clash font-normal text-[20px] text-[#2A254B]">
                The Lucy Lamp
              </h4>
              <p className="font-satochi font-normal text-[18px]">£399</p>
            </div>
            <div className="w-[163px] h-[288px] flex flex-col gap-2">
              <Image src="/vase.svg" alt="" width={163} height={201} />
              <h4 className="font-clash font-normal text-[20px] text-[#2A254B]">
                The Silky Vase
              </h4>
              <p className="font-satochi font-normal text-[18px]">£125</p>
            </div>
            <div className="w-[163px] h-[288px] flex flex-col gap-2">
              <Image src="/chairTwo.svg" alt="" width={163} height={201} />
              <h4 className="font-clash font-normal text-[20px] text-[#2A254B]">
                The Dandy chair
              </h4>
              <p className="font-satochi font-normal text-[18px]">£250</p>
            </div>
            <div className="w-[163px] h-[288px] flex flex-col gap-2">
              <Image src="/VaseSet.svg" alt="" width={163} height={201} />
              <h4 className="font-clash font-normal text-[20px] text-[#2A254B]">
                Rustic Vase Set
              </h4>
              <p className="font-satochi font-normal text-[18px]">£155</p>
            </div>
            <div className="w-[163px] h-[288px] flex flex-col gap-2">
              <Image src="/lamp.svg" alt="" width={163} height={201} />
              <h4 className="font-clash font-normal text-[20px] text-[#2A254B]">
                The Lucy Lamp
              </h4>
              <p className="font-satochi font-normal text-[18px]">£399</p>
            </div>
            <div className="w-[163px] h-[288px] flex flex-col gap-2">
              <Image src="/vase.svg" alt="" width={163} height={201} />
              <h4 className="font-clash font-normal text-[20px] text-[#2A254B]">
                The Silky Vase
              </h4>
              <p className="font-satochi font-normal text-[18px]">£125</p>
            </div>
            <div className="w-[163px] h-[288px] flex flex-col gap-2">
              <Image src="/chairTwo.svg" alt="" width={163} height={201} />
              <h4 className="font-clash font-normal text-[20px] text-[#2A254B]">
                The Dandy chair
              </h4>
              <p className="font-satochi font-normal text-[18px]">£250</p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-10">
            <Button className="w-[342px] tablet:w-[170px] h-[56px] bg-[#F9F9F9] text-[#2A254B] hover:text-white">
              View Collection
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
