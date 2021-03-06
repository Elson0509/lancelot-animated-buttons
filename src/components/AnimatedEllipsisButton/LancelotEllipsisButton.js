import React, {useState} from 'react';
import {StyleSheet, css} from 'aphrodite/no-important'
import PropTypes from 'prop-types';

const LancelotEllipsisButton = (props) => {
    const [checked, setChecked] = useState(props.checked || false)
    const standardBackground = '#fff'
    const standardPointer = 'pointer'
    const ellipsisStandardColor = 'black'
    const hoverEffectStandardTime = '.5'
    const crossStandardColor = 'red'
    const animationStandardTime = '.5'
    const rotationIntensity = {
        1:45,
        2:135,
        3:225,
        4:315,
        5:405,
        6:495,
        7:585,
        8:675,
        9:855,
        10:945,
    }
    const rotationStandardIntensity = rotationIntensity[3]

    const buttonSize = {
        1:{
            size: '30px',
            ellipsisSize: '4px',
            ellipsisTopLeft: '13.5px',
            ellipsisBeforeAfterPosition: '-7px',
            crossHeight: '20px',
            crossTop: '5px',
            crossLeft: '14px',
        },
        2:{
            size: '40px',
            ellipsisSize: '5px',
            ellipsisTopLeft: '18px',
            ellipsisBeforeAfterPosition: '-9px',
            crossHeight: '25px',
            crossTop: '8px',
            crossLeft: '18px',
        },
        3:{
            size: '50px',
            ellipsisSize: '7px',
            ellipsisTopLeft: '22px',
            ellipsisBeforeAfterPosition: '-12px',
            crossHeight: '30px',
            crossTop: '10px',
            crossLeft: '25px',
        },
        4:{
            size: '60px',
            ellipsisSize: '7px',
            ellipsisTopLeft: '27px',
            ellipsisBeforeAfterPosition: '-14px',
            crossHeight: '36px',
            crossTop: '12px',
            crossLeft: '29px',
        },
        5:{
            size: '70px',
            ellipsisSize: '7px',
            ellipsisTopLeft: '33px',
            ellipsisBeforeAfterPosition: '-16px',
            crossHeight: '40px',
            crossTop: '14px',
            crossLeft: '35px',
        },
        6:{
            size: '80px',
            ellipsisSize: '8px',
            ellipsisTopLeft: '37px',
            ellipsisBeforeAfterPosition: '-18px',
            crossHeight: '45px',
            crossTop: '17px',
            crossLeft: '40px',
        },
        7:{
            size: '90px',
            ellipsisSize: '8px',
            ellipsisTopLeft: '42px',
            ellipsisBeforeAfterPosition: '-20px',
            crossHeight: '50px',
            crossTop: '20px',
            crossLeft: '45px',
        },
        8:{
            size: '100px',
            ellipsisSize: '9px',
            ellipsisTopLeft: '48px',
            ellipsisBeforeAfterPosition: '-24px',
            crossHeight: '55px',
            crossTop: '23px',
            crossLeft: '50px',
        },
        9:{
            size: '110px',
            ellipsisSize: '9px',
            ellipsisTopLeft: '52px',
            ellipsisBeforeAfterPosition: '-28px',
            crossHeight: '60px',
            crossTop: '26px',
            crossLeft: '55px',
        },
        10:{
            size: '120px',
            ellipsisSize: '9px',
            ellipsisTopLeft: '56px',
            ellipsisBeforeAfterPosition: '-32px',
            crossHeight: '65px',
            crossTop: '29px',
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
        ellipsis:{
            background: checked ? props.crossColor || crossStandardColor : props.ellipsisColor || ellipsisStandardColor ,
            width: checked ? '3px' : buttonSize[props.buttonSize]?.ellipsisSize || standardButtonSize.ellipsisSize,
            height: checked ? buttonSize[props.buttonSize]?.crossHeight || standardButtonSize.crossHeight : buttonSize[props.buttonSize]?.ellipsisSize || standardButtonSize.ellipsisSize,
            top: checked ? buttonSize[props.buttonSize]?.crossTop || standardButtonSize.crossTop : buttonSize[props.buttonSize]?.ellipsisTopLeft || standardButtonSize.ellipsisTopLeft,
            left: checked ? buttonSize[props.buttonSize]?.crossLeft || standardButtonSize.crossLeft : buttonSize[props.buttonSize]?.ellipsisTopLeft || standardButtonSize.ellipsisTopLeft,
            transform: checked ? `rotate(${rotationIntensity[props.rotationIntensity] || rotationStandardIntensity}deg)` : '',
            transition: `${props.animationTime || animationStandardTime}s ease-in-out`,
            ':after':{
                display: 'block',
                borderRadius: '20px',
                content: `''`,
                width: '100%',
                height: '100%',
                position: 'absolute',
                transition: '.75s ease-in-out',
                background: checked ? props.crossColor || crossStandardColor : props.ellipsisColor || ellipsisStandardColor,
                bottom: checked ? 0 : buttonSize[props.buttonSize]?.ellipsisBeforeAfterPosition || standardButtonSize.ellipsisBeforeAfterPosition,
                transform: 'rotate(90deg)'
            },
            ':before':{
                display: 'block',
                borderRadius: '20px',
                content: `''`,
                width: '100%',
                height: '100%',
                position: 'absolute',
                transition: '.75s ease-in-out',
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
        <div onClick={clickHandler} style={{borderRadius: "50%"}} className={[css(styles.background), css(styles.size), css(!props.disableHoverEffect && styles.hoverEffect)].join(' ')}>
            <span style={{display: 'block', position: 'relative', borderRadius: '50%'}} className={[css(styles.ellipsis)].join(' ')}></span>
        </div>
    )
}

LancelotEllipsisButton.propTypes = {
    animationTime: PropTypes.number,
    background: PropTypes.string,
    buttonSize: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
    checked: PropTypes.bool,
    clicked: PropTypes.func,
    crossColor: PropTypes.string,
    cursor: PropTypes.string,
    disableHoverEffect: PropTypes.bool,
    ellipsisColor: PropTypes.string,
    hoverEffectTime: PropTypes.number,
    rotationIntensity: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
}

export default LancelotEllipsisButton;