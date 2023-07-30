import React from 'react'

const SchoolBasicInfo = ({schoolLogo, onBasicInfoSubmit, form, schoolTopDetail, handleOnChange}) => {
  return (
    <div>
      {" "}
      <div className="px-4 md:mt-64">
        <figure>
          <img src={schoolLogo} alt="" />
        </figure>
        <form onSubmit={handleSubmit(onBasicInfoSubmit)} noValidate>
          <div>
            <h6>School</h6>
            <div>
              {schoolTopDetail && <h6>{schoolTopDetail}, Location</h6>}
              <InputElements
                type="text"
                placeholder="ST&T Regency Schools"
                id="School Name"
                form={form}
                onChange={handleOnChange}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SchoolBasicInfo