import store from "./store";

export default {
  age: (pet) => {
    let age = pet.age;
    let cutIndex = age.length - 1;
    let num = parseInt(age.slice(0, cutIndex));
    let units = age.slice(cutIndex);

    if (num === 1) {
      return units === 'y' ? 'שנה' : 'חודש';
    } else if (num === 2) {
      return units === 'y' ? 'שנתיים' : 'חודשיים';
    } else {
      return num + (units === 'y' ? ' שנים' : ' חודשים');
    }
  },
  sex: (pet) => {
    let sex = pet.sex;
    switch (sex) {
      case 'm':
        return 'זכר';
      case 'f':
        return 'נקבה';
      default:
        return 'אחר';
    }
  },
  isFavorite: (pet) => {
    return store.favoriteDogs.includes(pet.id);
  }
}
