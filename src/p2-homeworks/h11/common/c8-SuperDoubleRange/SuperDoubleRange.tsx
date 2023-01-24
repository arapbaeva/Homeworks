import React from 'react'
import {Slider} from "@mui/material";


type SuperDoubleRangePropsType ={
    onChangeRange: ( value: number | number[]) => void
    value: number[] | number

    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    return (
        <>
            <Slider
                style={{width: "300px"}}
                value={value}
                onChange={(event, value)=> onChangeRange(value)}
            />
        </>
    )
}

export default SuperDoubleRange
