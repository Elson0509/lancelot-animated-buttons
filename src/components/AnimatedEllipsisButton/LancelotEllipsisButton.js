import React, {useState} from 'react';
import classes from './LancelotEllipsisButton.module.css'
import {StyleSheet, css} from 'aphrodite/no-important'

const LancelotEllipsisButton = (props) => {
    const standardBackground = '#fff';
    const standardPointer = 'pointer';
    const ellipsisStandardColor = 'black';
    const hoverEffectStandardTime = '.5';
    const crossStandardColor = 'red';
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
        '2x':{
            width: '40px',
            height: '40px',
            ellipsisWidth: '5px',
            ellipsisHeight: '5px',
            ellipsisTop: '18px',
            ellipsisLeft: '18px',
            ellipsisBeforePosition: '-10px',
            ellipsisAfterPosition: '-10px',
            crossHeight: '25px',
            crossTop: '8px',
            crossLeft: '18px',
        }
    }

    const standardButtonSize = buttonSize['2x']

    const animationStandardTime = '.5'

    const [checked, setChecked] = useState(false);

    const styles = StyleSheet.create({
        background:{
            background: props.background || standardBackground,
            boxShadow: `0 0 0 0 ${props.background || standardBackground}`,
            cursor: props.cursor || standardPointer,
            transition: `box-shadow ${props.hoverEffectTime || hoverEffectStandardTime}s cubic-bezier(.58,3.16,.31,-0.09)`
        },
        size:{
            height: standardButtonSize.height,
            width: standardButtonSize.width,
        },
        hoverEffect:{
            ':hover':{
                boxShadow: `0 0 0 6px ${props.background || standardBackground}`
            }
        },
        ellipsis:{
            background: checked ? props.crossColor || crossStandardColor : props.ellipsisColor || ellipsisStandardColor ,
            width: standardButtonSize.ellipsisWidth,
            height: checked ? standardButtonSize.crossHeight : standardButtonSize.ellipsisHeight,
            top: checked ? standardButtonSize.crossTop : standardButtonSize.ellipsisTop,
            left: checked ? standardButtonSize.crossLeft :standardButtonSize.ellipsisLeft,
            transform: checked ? `rotate(${rotationIntensity[props.rotationIntensity] || rotationStandardIntensity}deg)` : '',
            transition: `${props.animationTime || animationStandardTime}s ease-in-out`,
            ':after':{
                background: checked ? props.crossColor || crossStandardColor : props.ellipsisColor || ellipsisStandardColor,
                bottom: standardButtonSize.ellipsisAfterPosition
            },
            ':before':{
                background: checked ? props.crossColor || crossStandardColor : props.ellipsisColor || ellipsisStandardColor,
                top: standardButtonSize.ellipsisBeforePosition
            },
            
        }
    })

    const clickHandler = () => {
        setChecked(prev => !prev)
        props.clicked && props.clicked();
        return true;
    }

    return (
        <span>
            <input id={props.nameid ? props.nameid : "menu-ellipsis"} className={classes.Menu_ellipsis} type="checkbox" />
            <label htmlFor={props.nameid ? props.nameid : "menu-ellipsis"}>
                <div className={[classes.Menu, css(styles.background), css(styles.size), css(!props.disableHover && styles.hoverEffect)].join(' ')} onClick={clickHandler}>
                    <span className={[classes.Ellipsis, css(styles.ellipsis)].join(' ')}></span>
                </div>
            </label>
        </span>
    );

};

export default LancelotEllipsisButton;
// import React, {useState} from 'react';
// import classes from './LancelotEllipsisButton.module.css'
// import {StyleSheet, css} from 'aphrodite/no-important'

// const LancelotEllipsisButton = (props) => {
//     const standardBackground = '#fff';
//     const standardPointer = 'pointer';
//     const ellipsisStandardColor = 'black';
//     const hoverEffectStandardTime = '.5';
//     const crossStandardColor = 'red';
//     const rotationIntensity = {
//         '1x':45,
//         '2x':135,
//         '3x':225,
//         '4x':315,
//         '5x':405,
//         '6x':495,
//         '7x':585,
//         '8x':675,
//         '9x':855,
//         '10x':945,
//     }
//     const rotationStandardIntensity = rotationIntensity['5x']

//     const buttonSize = {
//         '2x':{
//             width: '40px',
//             height: '40px',
//             ellipsisWidth: '5px',
//             ellipsisHeight: '5px',
//             ellipsisTop: '18px',
//             ellipsisLeft: '18px',
//             ellipsisBeforePosition: '-10px',
//             ellipsisAfterPosition: '-10px',
//             crossHeight: '25px',
//             crossTop: '8px',
//             crossLeft: '18px',
//         }
//     }

//     const standardButtonSize = buttonSize['2x']

//     const animationStandardTime = '.5'

//     const [checked, setChecked] = useState(false);

//     const styles = StyleSheet.create({
//         background:{
//             background: props.background || standardBackground,
//             boxShadow: `0 0 0 0 ${props.background || standardBackground}`,
//             cursor: props.cursor || standardPointer,
//             transition: `box-shadow ${props.hoverEffectTime || hoverEffectStandardTime}s cubic-bezier(.58,3.16,.31,-0.09)`
//         },
//         hoverEffect:{
//             ':hover':{
//                 boxShadow: `0 0 0 6px ${props.background || standardBackground}`
//             }
//         },
//         ellipsis:{
//             background: checked ? props.crossColor || crossStandardColor : props.ellipsisColor || ellipsisStandardColor ,
//             transform: checked ? `rotate(${rotationIntensity[props.rotationIntensity] || rotationStandardIntensity}deg)` : '',
//             transition: `${props.animationTime || animationStandardTime}s ease-in-out`,
//             ':after':{
//                 background: checked ? props.crossColor || crossStandardColor : props.ellipsisColor || ellipsisStandardColor  
//             },
//             ':before':{
//                 background: checked ? props.crossColor || crossStandardColor : props.ellipsisColor || ellipsisStandardColor 
//             },
            
//         }
//     })

//     const clickHandler = () => {
//         setChecked(prev => !prev)
//         props.clicked && props.clicked();
//         return true;
//     }

//     return (
//         <span>
//             <input id={props.nameid ? props.nameid : "menu-ellipsis"} className={classes.Menu_ellipsis} type="checkbox" />
//             <label htmlFor={props.nameid ? props.nameid : "menu-ellipsis"}>
//                 <div className={[classes.Menu, css(styles.background), css(!props.disableHover && styles.hoverEffect)].join(' ')} onClick={clickHandler}>
//                     <span className={[classes.Ellipsis, css(styles.ellipsis)].join(' ')}></span>
//                 </div>
//             </label>
//         </span>
//     );

// };

// export default LancelotEllipsisButton;