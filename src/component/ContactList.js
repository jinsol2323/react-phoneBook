import React from 'react'
import ContactItem from './ContactItem'
import SearchBox from './SearchBox'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'


const ContactList = () => {

    const { contact, keyword } = useSelector((state) => state);
    let [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        if (keyword !== "") {
          let list = contact.filter((item) => item.name.includes(keyword));
    
          setFilteredList(list);
        } else {
          setFilteredList(contact);
        }
      }, [keyword]);


      return (
        <div>
          <SearchBox/>
          <div>
            num:{filteredList.length}
            {filteredList.map((item) => (
              <ContactItem item={item} />
            ))}
          </div>
        </div>
      );
    };

export default ContactList