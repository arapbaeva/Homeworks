import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    const onChangeHandler = (num: number | number[]) => {
        if (Array.isArray(num)) {
            setValue1(num[0])
            setValue2(num[1])
        } else {
            setValue1(num)
        }
    }
    // const onChangeHandler1 = (number:[number, number]) => {
    //     setValue2(number)
    // }


    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    onChangeRange={onChangeHandler}
                    value={value1}

                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    value={[value1, value2]}
                    onChangeRange={onChangeHandler}
                />
                <span>{value2}</span>
            </div>
        </div>
    )
}


export default HW11
