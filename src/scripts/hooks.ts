import {useNavigate} from "react-router-dom";

export const useFlipTo = () => {
  const navigate = useNavigate();

  return (volumeSlug?: string, folioSlug?: string) => {
    if (!volumeSlug) {
      navigate('/')
      return;
    }

    if (!folioSlug) {
      navigate(`/view/${volumeSlug}`);
      return
    }

    navigate(`/view/${volumeSlug}/${folioSlug}`)
  }
}