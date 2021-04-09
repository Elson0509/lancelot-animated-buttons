import React, {useState} from 'react';
import {StyleSheet, css} from 'aphrodite/no-important'
import PropTypes from 'prop-types';

const LancelotHamburguerButton = (props) => {
    const [checked, setChecked] = useState(props.checked || false)
    const standardBackground = '#fff'
    const standardPointer = 'pointer'
    const hamburguerStandardColor = 'black'
    const hoverEffectStandardTime = '.5'
    const crossStandardColor = 'red'
    const animationStandardTime = '.5'

    const rotationStandardIntensity = 3

    const buttonSize = {
        1:{
            size: '30px',
            hamburguerWidth: '16px',
            hamburguerHeight: '2px',
            hamburguerTop: '15px',
            hamburguerLeft: '7px',
            hamburguerBeforeAfterPosition: '-7px',
            crossHeight: '22px',
            crossTop: '4px',
            crossLeft: '14px',
        },
        2:{
            size: '40px',
            hamburguerWidth: '22px',
            hamburguerHeight: '3px',
            hamburguerTop: '18px',
            hamburguerLeft: '9.5px',
            hamburguerBeforeAfterPosition: '-8px',
            crossHeight: '25px',
            crossTop: '8px',
            crossLeft: '18px',
        },
        3:{
            size: '50px',
            hamburguerWidth: '28px',
            hamburguerHeight: '4px',
            hamburguerTop: '23px',
            hamburguerLeft: '12px',
            hamburguerBeforeAfterPosition: '-10px',
            crossHeight: '30px',
            crossTop: '11px',
            crossLeft: '24px',
        },
        4:{
            size: '60px',
            hamburguerWidth: '32px',
            hamburguerHeight: '4px',
            hamburguerTop: '28px',
            hamburguerLeft: '15px',
            hamburguerBeforeAfterPosition: '-13px',
            crossHeight: '36px',
            crossTop: '12px',
            crossLeft: '28px',
        },
        5:{
            size: '70px',
            hamburguerWidth: '34px',
            hamburguerHeight: '5px',
            hamburguerTop: '32px',
            hamburguerLeft: '18px',
            hamburguerBeforeAfterPosition: '-15px',
            crossHeight: '38px',
            crossTop: '14px',
            crossLeft: '34px',
        },
        6:{
            size: '80px',
            hamburguerWidth: '36px',
            hamburguerHeight: '5px',
            hamburguerTop: '36px',
            hamburguerLeft: '22px',
            hamburguerBeforeAfterPosition: '-16px',
            crossHeight: '42px',
            crossTop: '17px',
            crossLeft: '38px',
        },
        7:{
            size: '90px',
            hamburguerWidth: '40px',
            hamburguerHeight: '5px',
            hamburguerTop: '42px',
            hamburguerLeft: '26px',
            hamburguerBeforeAfterPosition: '-18px',
            crossHeight: '48px',
            crossTop: '21px',
            crossLeft: '44px',
        },
        8:{
            size: '100px',
            hamburguerWidth: '46px',
            hamburguerHeight: '6px',
            hamburguerTop: '46px',
            hamburguerLeft: '28px',
            hamburguerBeforeAfterPosition: '-20px',
            crossHeight: '54px',
            crossTop: '22px',
            crossLeft: '49px',
        },
        9:{
            size: '110px',
            hamburguerWidth: '50px',
            hamburguerHeight: '6px',
            hamburguerTop: '52px',
            hamburguerLeft: '32px',
            hamburguerBeforeAfterPosition: '-22px',
            crossHeight: '60px',
            crossTop: '24px',
            crossLeft: '55px',
        },
        10:{
            size: '120px',
            hamburguerWidth: '55px',
            hamburguerHeight: '6px',
            hamburguerTop: '58px',
            hamburguerLeft: '35px',
            hamburguerBeforeAfterPosition: '-24px',
            crossHeight: '64px',
            crossTop: '28px',
            crossLeft: '60px',
        },
    }

    const standardButtonSize = buttonSize[3]

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
        hamburguer:{
            background: checked ? props.crossColor || crossStandardColor : props.hamburguerColor || hamburguerStandardColor ,
            width: checked ? '3px' : buttonSize[props.buttonSize]?.hamburguerWidth || standardButtonSize.hamburguerWidth,
            height: checked ? buttonSize[props.buttonSize]?.crossHeight || standardButtonSize.crossHeight : buttonSize[props.buttonSize]?.hamburguerHeight || standardButtonSize.hamburguerHeight,
            top: checked ? buttonSize[props.buttonSize]?.crossTop || standardButtonSize.crossTop : buttonSize[props.buttonSize]?.hamburguerTop || standardButtonSize.hamburguerTop,
            left: checked ? buttonSize[props.buttonSize]?.crossLeft || standardButtonSize.crossLeft : buttonSize[props.buttonSize]?.hamburguerLeft || standardButtonSize.hamburguerLeft,
            transform: checked ? `rotate(${45 + 180 * ((props.rotationIntensity || rotationStandardIntensity) - 1)}deg)` : '',
            transition: `${props.animationTime || animationStandardTime}s ease-in-out`,
            ':after':{
                display: 'block',
                content: `''`,
                width: '100%',
                height: '100%',
                position: 'absolute',
                transition: '.75s ease-in-out',
                background: checked ? props.crossColor || crossStandardColor : props.hamburguerColor || hamburguerStandardColor,
                bottom: checked ? 0 : buttonSize[props.buttonSize]?.hamburguerBeforeAfterPosition || standardButtonSize.hamburguerBeforeAfterPosition,
            },
            ':before':{
                display: 'block',
                content: `''`,
                width: '100%',
                height: '100%',
                position: 'absolute',
                transition: '.75s ease-in-out',
                background: checked ? props.crossColor || crossStandardColor : props.hamburguerColor || hamburguerStandardColor,
                top: checked ? 0 : buttonSize[props.buttonSize]?.hamburguerBeforeAfterPosition || standardButtonSize.hamburguerBeforeAfterPosition,
                transform: checked ? `rotate(${-90 - 180 * ((props.rotationIntensity || rotationStandardIntensity) - 1)}deg)` : '',
            },
        }
    })

    const clickHandler = () => {
        setChecked(prev => !prev)
        props.clicked && props.clicked()
        return true;
    }

    return (
        <div onClick={clickHandler} style={{borderRadius: "50%"}} className={[css(styles.background), css(styles.size), css(!props.disableHoverEffect && styles.hoverEffect)].join(' ')}>
            <span style={{display: 'block', position: 'relative'}} className={[css(styles.hamburguer)].join(' ')}></span>
        </div>
    )
}

LancelotHamburguerButton.propTypes = {
    animationTime: PropTypes.number,
    background: PropTypes.string,
    buttonSize: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    checked: PropTypes.bool,
    clicked: PropTypes.func,
    crossColor: PropTypes.string,
    cursor: PropTypes.string,
    disableHoverEffect: PropTypes.bool,
    hamburguerColor: PropTypes.string,
    hoverEffectTime: PropTypes.number,
    rotationIntensity: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
}

export default LancelotHamburguerButton;