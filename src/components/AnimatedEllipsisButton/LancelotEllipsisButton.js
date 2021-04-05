import React, {useState} from 'react';
import classes from './LancelotEllipsisButton.module.css'
import {StyleSheet, css} from 'aphrodite/no-important'

const LancelotEllipsisButton = (props) => {
    const [checked, setChecked] = useState(props.checked || false)
    const standardBackground = '#fff'
    const standardPointer = 'pointer'
    const ellipsisStandardColor = 'black'
    const hoverEffectStandardTime = '.5'
    const crossStandardColor = 'red'
    const animationStandardTime = '.5'
    const rotationIntensity = {
        '1x':45,
        '2x':135,
        '3x':225,
        '4x':315,
        '5x':405,
        '6x':495,
        '7x':585,
        '8x':675,
        '9x':855,
        '10x':945,
    }
    const rotationStandardIntensity = rotationIntensity['5x']

    const buttonSize = {
        '1x':{
            size: '30px',
            ellipsisSize: '4px',
            ellipsisTopLeft: '13.5px',
            ellipsisBeforeAfterPosition: '-7px',
            crossHeight: '20px',
            crossTop: '5px',
            crossLeft: '14px',
        },
        '2x':{
            size: '40px',
            ellipsisSize: '5px',
            ellipsisTopLeft: '18px',
            ellipsisBeforeAfterPosition: '-9px',
            crossHeight: '25px',
            crossTop: '8px',
            crossLeft: '18px',
        },
        '3x':{
            size: '50px',
            ellipsisSize: '7px',
            ellipsisTopLeft: '22px',
            ellipsisBeforeAfterPosition: '-12px',
            crossHeight: '30px',
            crossTop: '10px',
            crossLeft: '25px',
        },
        '4x':{
            size: '60px',
            ellipsisSize: '7px',
            ellipsisTopLeft: '27px',
            ellipsisBeforeAfterPosition: '-14px',
            crossHeight: '36px',
            crossTop: '12px',
            crossLeft: '29px',
        },
        '5x':{
            size: '70px',
            ellipsisSize: '7px',
            ellipsisTopLeft: '33px',
            ellipsisBeforeAfterPosition: '-16px',
            crossHeight: '40px',
            crossTop: '14px',
            crossLeft: '35px',
        },
        '6x':{
            size: '80px',
            ellipsisSize: '8px',
            ellipsisTopLeft: '37px',
            ellipsisBeforeAfterPosition: '-18px',
            crossHeight: '45px',
            crossTop: '17px',
            crossLeft: '40px',
        },
        '7x':{
            size: '90px',
            ellipsisSize: '8px',
            ellipsisTopLeft: '42px',
            ellipsisBeforeAfterPosition: '-20px',
            crossHeight: '50px',
            crossTop: '20px',
            crossLeft: '45px',
        },
        '8x':{
            size: '100px',
            ellipsisSize: '9px',
            ellipsisTopLeft: '48px',
            ellipsisBeforeAfterPosition: '-24px',
            crossHeight: '55px',
            crossTop: '23px',
            crossLeft: '50px',
        },
        '9x':{
            size: '110px',
            ellipsisSize: '9px',
            ellipsisTopLeft: '52px',
            ellipsisBeforeAfterPosition: '-28px',
            crossHeight: '60px',
            crossTop: '26px',
            crossLeft: '55px',
        },
        '10x':{
            size: '120px',
            ellipsisSize: '9px',
            ellipsisTopLeft: '56px',
            ellipsisBeforeAfterPosition: '-32px',
            crossHeight: '65px',
            crossTop: '29px',
            crossLeft: '60px',
        },
    }

    const standardButtonSize = buttonSize['3x']

    const styles = StyleSheet.create({
        background:{
            background: props.background || standardBackground,
            boxShadow: `0 0 0 0 ${props.background || standardBackground}`,
            cursor: props.cursor || standardPointer,
            transition: `box-shadow ${props.hoverEffectTime || hoverEffectStandardTime}s cubic-bezier(.58,3.16,.31,-0.09)`
        },
        size:{
            height: buttonSize[props.buttonSize]?.size || standardButtonSize.size,
            width: buttonSize[props.buttonSize]?.size || standardButtonSize.size,
        },
        hoverEffect:{
            ':hover':{
                boxShadow: `0 0 0 6px ${props.background || standardBackground}`
            }
        },
        ellipsis:{
            background: checked ? props.crossColor || crossStandardColor : props.ellipsisColor || ellipsisStandardColor ,
            width: checked ? '3px' : buttonSize[props.buttonSize]?.ellipsisSize || standardButtonSize.ellipsisSize,
            height: checked ? buttonSize[props.buttonSize]?.crossHeight || standardButtonSize.crossHeight : buttonSize[props.buttonSize]?.ellipsisSize || standardButtonSize.ellipsisSize,
            top: checked ? buttonSize[props.buttonSize]?.crossTop || standardButtonSize.crossTop : buttonSize[props.buttonSize]?.ellipsisTopLeft || standardButtonSize.ellipsisTopLeft,
            left: checked ? buttonSize[props.buttonSize]?.crossLeft || standardButtonSize.crossLeft : buttonSize[props.buttonSize]?.ellipsisTopLeft || standardButtonSize.ellipsisTopLeft,
            transform: checked ? `rotate(${rotationIntensity[props.rotationIntensity] || rotationStandardIntensity}deg)` : '',
            transition: `${props.animationTime || animationStandardTime}s ease-in-out`,
            ':after':{
                background: checked ? props.crossColor || crossStandardColor : props.ellipsisColor || ellipsisStandardColor,
                bottom: checked ? 0 : buttonSize[props.buttonSize]?.ellipsisBeforeAfterPosition || standardButtonSize.ellipsisBeforeAfterPosition,
                transform: 'rotate(90deg)'
            },
            ':before':{
                background: checked ? props.crossColor || crossStandardColor : props.ellipsisColor || ellipsisStandardColor,
                top: checked ? 0 : buttonSize[props.buttonSize]?.ellipsisBeforeAfterPosition || standardButtonSize.ellipsisBeforeAfterPosition,
                transform: 'rotate(90deg)'
            },
        }
    })

    const clickHandler = () => {
        setChecked(prev => !prev)
        props.clicked && props.clicked()
        return true;
    }

    return (
        <div onClick={clickHandler} className={[classes.Menu, css(styles.background), css(styles.size), css(!props.disableHover && styles.hoverEffect)].join(' ')}>
            <span className={[classes.Ellipsis, css(styles.ellipsis)].join(' ')}></span>
        </div>
    )
}

export default LancelotEllipsisButton;