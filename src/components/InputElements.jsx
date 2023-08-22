import React from "react"
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material"
import { Controller } from "react-hook-form"
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"

import { CONSTANTS } from "./Components"
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineCloudUpload
} from "react-icons/ai"

const InputElements = ({
  type,
  form,
  isPasswordVisible,
  passwordChange,
  togglePasswordVisibility,
  id,
  checkPasswordMatch,
  onChange,
  image,
  placeholder,
  label,
  name,
  value,
  onClick,
  icon,
  disabled,
  options,
  required,
  multiple,
  defaultValue
}) => {
  const {
    EMAIL_PLACEHOLDER,
    PASSWORD_PLACEHOLDER,
    CONFIRM_PASSWORD_PLACEHOLDER
  } = CONSTANTS
  const { register, control, handleSubmit, formState, reset } = form
  const { errors, isSubmitSuccessful, isSubmitting, isSubmitted } = formState

  const initialRules = required ? { required: "Please fill in this field" } : {}

  if (type === "email") {
    return (
      <div className="w-full">
        <fieldset className="w-full h-[50px]">
          <input
            type="email"
            id="email"
            placeholder={EMAIL_PLACEHOLDER}
            className="outline-none w-full border border-colorWhite3 rounded-lg bg-colorWhite2 h-full px-2"
            {...register(`email`, {
              required: {
                value: true,
                message: "Please fill in your email"
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address"
              }
            })}
          />
        </fieldset>
        {<p className="text-colorRed text-[10px]">{errors.email?.message}</p>}
      </div>
    )
  } else if (id === "password" || id === "confirmPassword") {
    if (id === "password") {
      return (
        <div>
          <fieldset className="w-full border rounded-lg border-colorWhite3 bg-colorWhite2 h-[50px] px-2 flex items-center">
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              placeholder={PASSWORD_PLACEHOLDER}
              className="outline-none w-full bg-transparent"
              {...register(`password`, {
                required: {
                  value: true,
                  message: "Please fill in your password"
                },
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message: ""
                }
              })}
              onChange={passwordChange}
            />
            {isPasswordVisible ? (
              <AiOutlineEye
                size={20}
                className="text-colorGray5"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <AiOutlineEyeInvisible
                size={20}
                className="text-colorGray5"
                onClick={togglePasswordVisibility}
              />
            )}
          </fieldset>
          {
            <p className="text-colorRed text-[10px]">
              {errors.password?.message}
            </p>
          }
        </div>
      )
    } else if (id === "confirmPassword") {
      return (
        <div>
          <fieldset className="w-full border rounded-lg border-colorWhite3 bg-colorWhite2 h-[50px] px-2 flex items-center">
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="confirmPassword"
              placeholder={CONFIRM_PASSWORD_PLACEHOLDER}
              className="outline-none w-full bg-transparent"
              {...register(`confirmPassword`, {
                required: {
                  value: true,
                  message: "Please confirm your password"
                },
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                  message:
                    "Password must be at least 8 characters long and contain at least one letter, one number, and one special character"
                }
              })}
              onChange={checkPasswordMatch}
            />
            {isPasswordVisible ? (
              <AiOutlineEye
                size={20}
                className="text-colorGray5"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <AiOutlineEyeInvisible
                size={20}
                className="text-colorGray5"
                onClick={togglePasswordVisibility}
              />
            )}
          </fieldset>
          {
            <p className="text-colorRed text-[10px]">
              {errors.confirmPassword?.message}
            </p>
          }
        </div>
      )
    }
  } else if (type === "file") {
    return (
      <fieldset className="w-full flex flex-col items-center">
        {image && (
          <figure className="w-[150px] h-[150px]">
            <img
              className="w-full h-full rounded-md"
              src={image}
              alt="School Logo"
            />{" "}
          </figure>
        )}
          <label
            htmlFor={id}
            className={`flex gap-2 w-[150px] ${
              image
                ? "h-10 mt-2 bg-colorBlue text-colorWhite3 flex flex-row"
                : "h-[150px] flex-col"
            } border-2 border-dotted rounded-md text-sm items-center justify-center cursor-pointer`}
          >
            {" "}
            <AiOutlineCloudUpload size={20} />
            {image ? "Change Image" : "Upload"}
          </label>
        
        <input
          type="file"
          id={id}
          className="hidden"
          {...register(`${id}`, {
            required: {
              value: true,
              message: "Please upload image"
            }
          })}
          onChange={onChange}
        />
        {<p className="text-colorRed text-[10px]">{errors?.[id]?.message}</p>}
      </fieldset>
    )
  } else if (type === "text") {
    if (disabled) {
      return (
        <div className="w-full">
          <fieldset className="w-full h-[50px] flex items-center bg-colorWhite2 border border-colorWhite3 rounded-lg ">
            <input
              type="text"
              value={value}
              onChange={onChange}
              id={id}
              placeholder={placeholder}
              className="outline-none w-full  h-full px-2"
              disabled={disabled}
              {...register(`${id}`)}
            />
            {icon}
          </fieldset>
        </div>
      )
    }
    return (
      <div className="w-full h-full">
        <fieldset className="w-full h-full flex items-center bg-colorWhite2 border border-colorWhite3 rounded-lg ">
          <input
            type="text"
            id={id}
            value={value}
            placeholder={placeholder}
            defaultValue={defaultValue}
            className="outline-none w-full  h-full px-2"
            {...register(`${id}`, {
              required: {
                value: value ? false : true,
                message: `Please fill in this field`
              }
            })}
            onChange={onChange}
          />
          {icon}
        </fieldset>
        {<p className="text-colorRed text-[10px] h-8">{errors?.[id]?.message}</p>}
      </div>
    )
  } else if (type === "url") {
    return (
      <div className="w-full">
        <fieldset className="w-full h-[50px]">
          <input
            type="url"
            id={id}
            placeholder={placeholder}
            className="outline-none w-full border border-colorWhite3 rounded-lg bg-colorWhite2 h-full px-2"
            {...register(`${id}`, {
              required: {
                value: true,
                message: `Please fill in this field`
              }
            })}
          />
        </fieldset>
        {<p className="text-colorRed text-[10px]">{errors?.[id]?.message}</p>}
      </div>
    )
  } else if (type === "select") {
    if (multiple) {
      return (
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor={id}>{label}</InputLabel>

          <Controller
            name={id}
            control={control}
            rules={initialRules}
            render={({ field }) => (
              <Select
                label={label}
                multiple
                value={field.value || []}
                sx={{
                  borderRadius: 3,
                  height: "100%",
                  backgroundColor: "white"
                }}
                onChange={(e) => {
                  field.onChange(e)
                  onChange && onChange(e) // Call the custom onChange function if provided
                }}
              >
                {options?.map((data, index) => (
                  <MenuItem key={index} value={data}>
                    {data}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormControl>
      )
    }
    return (
      <div>
        <FormControl variant="outlined" fullWidth>
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <Controller
            name={id}
            control={control}
            rules={initialRules}
            render={({ field }) => (
              <Select
                label={label}
                {...field}
                sx={{
                  borderRadius: 3,
                  height: "100%",
                  backgroundColor: "white"
                }}
                onChange={(e) => {
                  field.onChange(e)
                  onChange && onChange(e) // Call the custom onChange function if provided
                }}
              >
                {options?.map((data, index) => {
                  return (
                    <MenuItem key={index} value={data}>
                      {data}
                    </MenuItem>
                  )
                })}
              </Select>
            )}
          />
        </FormControl>
        {<p className="text-colorRed text-[10px]">{errors?.[id]?.message}</p>}
      </div>
    )
  } else if (type === "autoComplete") {
    return (
      <Controller
        name={id}
        control={control}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Autocomplete
            multiple
            id={`${id}-combo-box`}
            options={options}
            getOptionLabel={(option) => option}
            sx={{
              borderRadius: 3,
              height: "100%",
              backgroundColor: "white"
            }}
            renderInput={(params) => <TextField {...params} label={label} />}
            value={field.value}
            onChange={(e, newValue) => {
              field.onChange(newValue)
              onChange && onChange(newValue)
            }}
          />
        )}
      />
    )
  } else if (type === "radio") {
    return (
      <input
        type="radio"
        name={name}
        value={value}
        id={id}
        onClick={onClick}
        {...register(`${name}`, {
          required: {
            value: true,
            message: "Please fill in this field "
          }
        })}
        className="appearance-none w-4 h-4 rounded-full checked:bg-colorLightGreen"
      />
    )
  } else if (type === "number") {
    return (
      <div className="w-full">
        <fieldset className="w-full h-[50px] flex items-center bg-colorWhite2 border border-colorWhite3 rounded-lg ">
          <input
            type="number"
            id={id}
            placeholder={placeholder}
            className="outline-none w-full  h-full px-2"
            {...register(`${id}`, {
              required: {
                value: true,
                message: `Please fill in this field`
              }
            })}
            onChange={onChange}
          />
          {icon}
        </fieldset>
        {<p className="text-colorRed text-[10px]">{errors?.[id]?.message}</p>}
      </div>
    )
  } else if (type === "textArea") {
    return (
      <div className="w-full h-full">
        <textarea
          id={id}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className="outline-none w-full h-full p-2 bg-colorWhite2 border border-colorWhite3 rounded-lg resize-none"
          {...register(`${id}`, {
            required: {
              value: true,
              message: `Please fill in this field`
            }
          })}
          onChange={onChange}
        />
        {icon}
        {<p className="text-colorRed text-[10px]">{errors?.[id]?.message}</p>}
      </div>
    )
  }
  return <div>InputElements</div>
}

export default InputElements
