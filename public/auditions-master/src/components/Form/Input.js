import React, { useEffect } from "react";
import "./Input.css";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";

function Input(props) {
	function valuetext(value) {
		return `${value}°C`;
	}
	return (
		<div className="input">
			{props.object.type === "text" && (
				<TextField
					fullWidth
					InputProps={{ inputProps: { min: 1, max: 10 } }}
					id="filled-basic"
					required
					label={props.object.label}
					variant="filled"
					value={props.data[props.index]}
					onChange={(e) => {
						let arr = [...props.data];
						arr[props.index] = e.target.value;
						props.setData(arr);
					}
					}
				/>
			)}
			{props.object.type === "radio" && (
				<div>
					<h2>{props.object.label}</h2>
					<RadioGroup
						aria-labelledby="demo-radio-buttons-group-label"
						defaultValue="female"
						name="radio-buttons-group"
						value={props.data[props.index]}
						onChange={(e) => {
							let arr = [...props.data];
							arr[props.index] = e.target.value;
							props.setData(arr);
						}}
					>
						{props.object.options.map((option, i) => (
							<FormControlLabel
								value={option}
								key={i}
								control={<Radio required={true} />}
								label={option}
							/>
						))}
					</RadioGroup>
				</div>
			)}
			{props.object.type === "text-group" && (
				<>
					{props.object.questions.map((question, i) => (
						<>
							{question.type === "text" && (
								<TextField
									fullWidth
									key={i}
									required
									id="filled-basic"
									label={question.label}
									variant="filled"
									value={props.data[props.index][i]}
									onChange={(e) => {
										let arr = [...props.data];
										arr[props.index][i] = e.target.value;
										props.setData(arr);
									}}
								/>
							)}
							{question.type === "radio" && (
								<div>
									<h2>{question.label}</h2>
									<RadioGroup
										aria-labelledby="demo-radio-buttons-group-label"
										defaultValue="female"
										name="radio-buttons-group"
										value={props.data[props.index][1]}
										onChange={(e) => {
											let arr = [...props.data];
											arr[props.index][1] = e.target.value;
											props.setData(arr);
										}}
									>
										{question.options.map((option, j) => (
											<FormControlLabel
												value={option}
												key={j}
												control={<Radio required={true} />}
												label={option}
											/>
										))}
									</RadioGroup>
								</div>
							)}
						</>
					))}
				</>
			)}
			{props.object.type === "range" && (
				<div>
					<h2>{props.object.label}</h2>
					{props.object.options.map((option, i) => (
						<>
							<h3>{option}</h3>
							<Slider
								aria-label="Temperature"
								key={i}
								defaultValue={5}
								getAriaValueText={valuetext}
								valueLabelDisplay="auto"
								step={1}
								marks
								min={1}
								max={10}
								value={props.data[props.index][i]}
								onChange={(e) => {
									let arr = [...props.data];
									arr[props.index][i] = e.target.value;
									props.setData(arr);
								}}
							/>
						</>
					))}
				</div>
			)}
			{props.object.type === "multi-radio" && (
				<>
					<h2>{props.object.label}</h2>
					<FormGroup>
						{props.object.options.map((option, i) => (
							<FormControlLabel
							key={i}
								control={
									<Checkbox
										checked={props.data[props.index][i]}
										onChange={(e) => {
											let arr = [...props.data];
											arr[props.index][i] = e.target.checked;
											props.setData(arr);
										}}
									/>
								}
								label={option}
							/>
						))}
					</FormGroup>
				</>
			)}
			{props.object.type === "essay" && (
				<>
					<h2>{props.object.label}</h2>
					<TextField
						fullWidth
						multiline
						rows={10}
						className="essay"
						id="filled-basic"
						label="Answer"
						variant="filled"
						value={props.data[props.index]}
						onChange={(e) => {
							let arr = [...props.data];
							arr[props.index] = e.target.value;
							props.setData(arr);
							// if(e.target.value!='')props.error.true;
						}}
					/>
				
				</>
			)}
			{props.object.type === "image" && (
				<>
					<h2 align="center">{props.object.label}</h2>
					
					{/* <div style={{ display: "flex" }}> */}
					<img
						src={require("../../images/ques.png")}
						alt="Question"
						height="250px"
					/>
					<TextField
						fullWidth
						multiline
						rows={10}
						className="essay"
						id="filled-basic"
						label="Answer"
						variant="filled"
						value={props.data[props.index]}
						onChange={(e) => {
							let arr = [...props.data];
							arr[props.index] = e.target.value;
							props.setData(arr);
						}}
					/>
					{/* </div> */}
				</>
			)}
		</div>
	);
}

export default Input;
