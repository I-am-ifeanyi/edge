import React from "react"
import { useSelector } from "react-redux"

import InputElements from "../../../components/InputElements"
import { Button } from "../../../components/Components"

const SchoolBasicInfo = ({
  onBasicInfoSubmit,
  form,
  schoolTopDetail,
  handleOnChange,
  handleOnChangeState
}) => {
  const {
    register,
    control,
    handleSubmit,
    formState,
    reset,
    errors,
    onChange
  } = form
  const { adminCompleteInfo } = useSelector((store) => store.adminInfo)

  const schoolLogo = adminCompleteInfo?.adminLogo

  const { name, state } = schoolTopDetail
  const statesInNigeria = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
    "Federal Capital Territory (FCT)"
  ]

  return (
    <div>
      {" "}
      <div className="px-4 relative top-56 w-full flex flex-col md:flex-row items-center md:items-start bg-colorWhite1 py-5 rounded-md justify-between">
        {schoolLogo && (
          <figure className="w-[250px] h-[250px] mb-16">
            <img
              src={schoolLogo}
              alt=""
              className="w-full h-full rounded-full"
            />
            <figcaption className="text-center font-bold tracking-widest mt-2">
              School Logo
            </figcaption>
          </figure>
        )}
        <form
          className="md:w-[70%] w-full flex flex-col md:items-start items-center"
          onSubmit={handleSubmit(onBasicInfoSubmit)}
          noValidate
        >
          {name && (
            <h6 className="mt-5">
              {name}, {state}.
            </h6>
          )}

          <div className="flex w-full items-center justify-between py-5 border-b gap-4">
            <h6>School</h6>
            <div className="md:w-2/3 w-3/4 flex flex-col gap-5">
              <div className="h-12">
                <InputElements
                  type="text"
                  placeholder="ST&T Regency Schools"
                  id="schoolName"
                  form={form}
                  onChange={handleOnChange}
                />
              </div>
              <div className="h-12">
                <InputElements
                  type="text"
                  placeholder="Discipline, Confidence and Integrity"
                  id="schoolMotto"
                  form={form}
                />
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-between py-5 border-b gap-4">
            <h6>Address</h6>
            <div className="md:w-2/3 w-3/4 grid md:grid-cols-2 gap-5">
              <div className="h-12 col-span-2 md:col-span-1">
                <InputElements
                  type="text"
                  placeholder="No 40 Durban Street"
                  id="address"
                  form={form}
                />
              </div>
              <div className="h-12 col-span-2 md:col-span-1">
                <InputElements
                  type="text"
                  placeholder="Wuse"
                  id="city"
                  form={form}
                />
              </div>
              <div className="w-full col-span-2">
                <InputElements
                  type="select"
                  id="state"
                  form={form}
                  onChange={handleOnChangeState}
                  options={statesInNigeria}
                  label="Abuja"
                />
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-between py-5 border-b gap-4">
            <h6>Contact</h6>
            <div className="md:w-2/3 w-3/4 grid md:grid-cols-2 gap-5">
              <InputElements
                type="url"
                placeholder="https://flyt.netlify.com"
                id="website"
                form={form}
              />
              <InputElements
                type="email"
                placeholder="flyt.info.com"
                id="email"
                form={form}
              />
              <InputElements
                type="text"
                value="+234"
                disabled={true}
                form={form}
              />
              <InputElements
                type="text"
                id="number"
                form={form}
                placeholder="7045765423"
              />
            </div>
          </div>
          <div className="m-auto my-10 h-10">
            <Button
              text="Update Basic Information"
              background="bg-colorBlue"
              color="text-colorWhite1"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default SchoolBasicInfo
