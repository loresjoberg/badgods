import {useNavigate} from "react-router-dom";

export const useFlipTo = () => {
  const navigate = useNavigate();

  return (volumeSlug: string, folioSlug: string) => {
    navigate(`/view/${volumeSlug}/${folioSlug}`)
  }
}