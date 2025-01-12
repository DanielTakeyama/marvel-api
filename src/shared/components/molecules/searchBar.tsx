import pt from "@/shared/message/pt.json";
import BaseInput from "@/shared/components/atoms/input";

export default function SearchBar(){
    return <BaseInput type="text" name= "searchBar" placeholder={pt.placeholders.searchBar} className=""/>
}