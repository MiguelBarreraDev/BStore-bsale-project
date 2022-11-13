import { _xjs } from "@/lib/remi"

const ProductCard = ({ url_image, name, id, price, discount }) => (
  _xjs('div', {
    class: `relative flex flex-col justify-between shadow-xl rounded-md shadow-slate-250 w-8/12 sm:max-w-xs h-96 overflow-hidden`,
    children: [
      _xjs('div', {
        class: `${!discount && 'hidden'} -translate-x-1/2 -translate-y-3/4 -rotate-45 origin-top-right text-md absolute text-center w-4/12 bg-orange-500 text-white`,
        children: `-${discount}%`
      }),
      _xjs('img', {
        class: 'flex-1 object-cover w-full h-3/5',
        height: '200',
        src: url_image,
        alt: 'product image licores'
      }),
      _xjs('div', {
        class: 'p-2 text-center',
        children: [
          _xjs('span', {
            class: 'text-orange-500 text-sm',
            children: 'BStore company'
          }),
          _xjs('h4', {
            class: 'truncate text-md text-slate-600 font-semibold',
            children: name
          }),
          _xjs('span', {
            class: 'block text-slate-500 text-xl',
            children: `S/. ${price}`
          }),
          _xjs('button', {
            class: 'flex w-fitt gap-2 px-2 mx-auto items-center justify-evenly my-2 py-1 hover:bg-orange-500 transition hover:text-white text-center text-slate-500 border-orange-500 border',
            children: [
              _xjs('i', {
                class: 'fa-solid fa-cart-shopping'
              }),
              'Añadir al carro'
            ]
          })
        ]
      }),
    ]
  })
)

export default ProductCard
