export const findDate = (timestamp) => {
   let date = new Date(timestamp * 1000);

   let month = date.getMonth() + 1;
   let day = date.getDate();
   let year = date.getFullYear();

   month = month < 10 ? `0${month}` : month;
   day = day < 10 ? `0${day}` : day;

   return `${month}/${day}/${year}`;
};

export const formatDate = (date) => {
   let month = date.getMonth() + 1;
   let day = date.getDate();
   let year = date.getFullYear();

   month = month < 10 ? `0${month}` : month;
   day = day < 10 ? `0${day}` : day;

   return `${month}/${day}/${year}`;
};
export const findTime = (timestamp) => {
   let time = new Date(timestamp * 1000);
   let hours = time.getHours();
   let minutes = time.getMinutes();

   let ampm = hours >= 12 ? "PM" : "AM";

   hours = hours % 12 || 12;
   hours = hours < 10 ? `0${hours}` : hours;
   minutes = minutes < 10 ? `0${minutes}` : minutes;

   return `${hours}:${minutes} ${ampm}`;
};

export const getDays = (timestamp) => {
   const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
   const today = new Date();
   const targetDate = new Date(timestamp * 1000);

   if (targetDate.toDateString() === today.toDateString()) {
      return "Today";
   }

   return days[targetDate.getDay()];
};

export const monthlyDay = (timestamp) => {
   let date = new Date(timestamp * 1000);
   let month = date.getMonth() + 1;
   let day = date.getDate();

   return `${month}/${day}`;
};
