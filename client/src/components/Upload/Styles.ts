import { styled } from "solid-styled-components";

export const UploadContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  padding: 1em 1.25em;
  background-color: #1e1e1f;
  border-radius: 8px;
  z-index: 99999;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  height: 72px;
  align-items: center;
  border-bottom: 1px rgba(209, 213, 219, 0.4) solid;

  justify-content: space-between;
`;

export const BodyContainer = styled.div`
  display: flex;
  height: 400px;
  flex-direction: column;
  padding-top: 1.5em;
  gap: 1.5em;
`;

export const Title = styled.h3`
  font-size: 24px;
  color: #d1d5db;
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
export const Text = styled.p`
  color: #d1d5db;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink: 1;
`;

export const TextInput = styled.input`
  position: relative;
  background-color: #333;
  color: #fff;
  height: 42px;
  padding: 10px;
  font-size: 14px;
  border-radius: 5px;
  font-weight: 500;
  margin: 0 0.2em;
  border: 1px #1a1a1a solid;
  &:focus {
    outline: none;
  }
`;

export const Dropzone = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 0.2em;
  background-color: #333;
  color: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 1px rgb(217, 217, 217) solid;
  &:hover {
    background-color: #3d3d3d;
  }
`;

export const DropzoneDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
`;

export const FileInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
`;

export const FileContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 0.2em;
  background-color: #333;
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  border: 1px rgb(217, 217, 217) solid;
  &:hover {
    background-color: #3d3d3d;
  }
`;

export const FileRemove = styled.div`
  position: absolute;
  top: 1em;
  right: 1em;
`;

export const FileBox = styled.div`
  display: flex;
  gap: 1em;
`;

export const FileDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 320px;

  @media (max-width: 500px) {
    max-width: 240px;
  }
`;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
