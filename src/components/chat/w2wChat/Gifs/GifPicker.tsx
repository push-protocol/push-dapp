// React + Web3 Essentials
import React, { FC, useRef, useState } from 'react';

// External Packages

// Internal Compoonents
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ItemVV2 } from "components/reusables/SharedStylingV2";
import { useFetch } from '../stickers/useFetchHook';
import { useClickAway } from 'hooks/useClickAway';
import './GifPicker.css';


// Internal Configs
import configs from 'config/W2WConfig';

interface GifPickerProps {
  setIsOpened: (value: boolean) => void;
  onSelect: (gif: any) => void;
  isOpen: boolean;
}

const GifPicker: FC<GifPickerProps> = ({ setIsOpened, isOpen, onSelect }) => {
  const [searchInputValue, setSearchInputValue] = useState('');
  const timeOutRef = useRef<any>(null);

  useClickAway(timeOutRef,null,() => {
    setIsOpened(!isOpen);
  });

  const { data, loading, error } = useFetch(`giphy-${searchInputValue}`, () =>
    fetch(
      searchInputValue.trim()
        ? `https://api.giphy.com/v1/gifs/search?api_key=${configs.giphyAPIKey}&q=${encodeURIComponent(
            searchInputValue.trim()
          )}`
        : `https://api.giphy.com/v1/gifs/trending?api_key=${configs.giphyAPIKey}`
    ).then((res) => res.json())
  );

  return (
        <div ref={timeOutRef} className="gifPciker_Body">
          <div className="gifPicker_search_body">
            <div className="gifPicker_search">
              <div className="gifPicker_search_input">
                <input
                  onChange={(e) => {
                    if (timeOutRef.current) clearTimeout(timeOutRef.current);
                    timeOutRef.current = setTimeout(() => {
                      setSearchInputValue(e.target.value);
                    }, 500);
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
            <ItemVV2>
              <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={40} />
            </ItemVV2>
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
                    onSelect(item?.images?.original?.url);
                    setIsOpened(!isOpen);
                  }}
                  className="h-[100px] flex-1 cursor-pointer object-cover"
                  src={item?.images?.original?.url}
                  alt=""
                />
              ))}
            </div>
          )}
        </div>
  );
};

export default GifPicker;
