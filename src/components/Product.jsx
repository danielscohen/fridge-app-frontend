import dairyImage from '../assets/images/cheese.png'
import meatImage from '../assets/images/meat.png'
import produceImage from '../assets/images/produce.png'

const Product = ({ name, category, img, clickHandler }) => {
    const getCategoryImg = category => {
        if (category === "dairy") return dairyImage;
        if (category === "meat") return meatImage;
        if (category === "produce") return produceImage;
    }

    return (
        <article className='product'>
            <h3 className='product--name'>{name}</h3>
            <h4 className='product--category'>{category}</h4>
            <img className='product--category-image' src={getCategoryImg(category)} alt={category} width="30" height="30" />
            <button className='product--remove-button' onClick={clickHandler}>Remove</button>
        </article>
    )
}

export default Product;