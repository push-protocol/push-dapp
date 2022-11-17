// React + Web3 Essentials
import React, { FC, useRef, useState } from 'react';

// External Packages
import styled from 'styled-components';

// Internal Components
import LoaderSpinner, { LOADER_TYPE } from 'components/reusables/loaders/LoaderSpinner';
import { ItemVV2 } from "components/reusables/SharedStylingV2";
import { useFetch } from '../../stickers/useFetchHook';
import { useClickAway } from 'hooks/useClickAway';

// Internal Configs
import configs from 'config/W2WConfig';

// Interfaces
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
        <OuterContainer ref={timeOutRef}>
          <SearchContainer>
            <Search>
              <SearchInputContainer>
                <SearchInput
                  onChange={(e) => {
                    if (timeOutRef.current) clearTimeout(timeOutRef.current);
                    timeOutRef.current = setTimeout(() => {
                      setSearchInputValue(e.target.value);
                    }, 500);
                  }}
                  type="text"
                  placeholder="Search..."
                />
              </SearchInputContainer>
              <SearchIconContainer>
                <SearchIcon className="fa fa-search" aria-hidden="true" />
              </SearchIconContainer>
            </Search>
          </SearchContainer>

          {loading ? (
            <ItemVV2>
              <LoaderSpinner type={LOADER_TYPE.SEAMLESS} spinnerSize={40} />
            </ItemVV2>
          ) : error ? (
            <div className="flex flex-grow flex-col items-center justify-center">
              <p className="text-center">Sorry... Giphy has limited the request</p>
            </div>
          ) : (
            <GifPickerContainer>
              {(data as any).data?.map((item: any) => (
                <GifPickerImage
                  key={item.id}
                  onClick={() => {
                    onSelect(item?.images?.original?.url);
                    setIsOpened(!isOpen);
                  }}
                  src={item?.images?.original?.url}
                  alt=""
                />
              ))}
            </GifPickerContainer>
          )}
        </OuterContainer>
  );
};

const OuterContainer = styled.div`
  background-color: rgb(55, 55, 56);
  width: 20rem;
  height: 20rem;
  position: absolute;
  border-radius: 5px;
  color: white;
  border: 1px solid gray;
  display: flex;
  top: -19rem;
  right: 8rem;
  flex-direction: column;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Search = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  width: 80%;
  height: 40px;
  margin-top: 10px;
  border-radius: 20px;
  background-color: rgb(116, 115, 115);
`

const SearchInputContainer = styled.div`
  width: 85%;
`

const SearchInput = styled.input`
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  color: white;
  &::placeholder {
    color: white;
  }
`

const SearchIconContainer = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SearchIcon = styled.i`
  align-items: flex-start;
`

const GifPickerContainer = styled.div`
  display: flex;
  overflow-y: auto;
  margin-top: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 2;
  flex-grow: initial;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: rgb(55, 55, 56);
    border-radius: 10px;
    opacity: 0.5;
  }

  &::-webkit-scrollbar-thumb {
    background: #ca599b;
    border-radius: 10px;
  }
`

const GifPickerImage = styled.img`
  flex: 1;
  cursor: pointer;
  justify-content: end;
  max-width: 45%;
  padding: 5px;
  height: 50%;
  object-fit: cover;
`

export default GifPicker;
