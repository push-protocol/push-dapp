import { FC, useRef, useState } from 'react'
import configs from '../configs'
import ClickAwayListener from '../clickAwayListener'
import Loader from 'react-loader-spinner'
import { useFetch } from '../stickers/useFetchHook'
import React from 'react'
import './gifPicker.css'

interface GifPickerProps {
  setIsOpened: (value: boolean) => void
  onSelect: (gif: any) => void
}

const GifPicker: FC<GifPickerProps> = ({ setIsOpened, onSelect }) => {
  const [searchInputValue, setSearchInputValue] = useState('')
  console.log('gif')
  const timeOutRef = useRef<any>(null)

  const { data, loading, error } = useFetch(`giphy-${searchInputValue}`, () =>
    fetch(
      searchInputValue.trim()
        ? `https://api.giphy.com/v1/gifs/search?api_key=${configs.giphyAPIKey}&q=${encodeURIComponent(
            searchInputValue.trim()
          )}`
        : `https://api.giphy.com/v1/gifs/trending?api_key=${configs.giphyAPIKey}`
    ).then(res => res.json())
  )

  return (
    <ClickAwayListener onClickAway={() => setIsOpened(false)}>
      {ref => (
        <div ref={ref} className="gifPciker_Body">
          <div className="gifPicker_search_body">
            <div className="gifPicker_search">
              <div className="gifPicker_search_input">
                <input
                  onChange={e => {
                    if (timeOutRef.current) clearTimeout(timeOutRef.current)
                    timeOutRef.current = setTimeout(() => {
                      setSearchInputValue(e.target.value)
                    }, 500)
                  }}
                  type="text"
                  className="text"
                  placeholder="Search..."
                />
              </div>
              <div className="gifPciker_i">
                <i className="fa fa-search" aria-hidden="true"></i>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="flex flex-grow items-center justify-center">
              <Loader />
            </div>
          ) : error ? (
            <div className="flex flex-grow flex-col items-center justify-center">
              <p className="text-center">Sorry... Giphy has limited the request</p>
            </div>
          ) : (
            <div className="gifPicker_gifs">
              {(data as any).data?.map((item: any) => (
                <img
                  key={item.id}
                  onClick={() => {
                    onSelect(item?.images?.original?.url)
                    setIsOpened(false)
                  }}
                  className="h-[100px] flex-1 cursor-pointer object-cover"
                  src={item?.images?.original?.url}
                  alt=""
                />
              ))}
            </div>
          )}
        </div>
      )}
    </ClickAwayListener>
  )
}

export default GifPicker
/*
 */
