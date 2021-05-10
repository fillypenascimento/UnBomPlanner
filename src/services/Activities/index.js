import localForage from "localforage";

var activitiesStore = localForage.createInstance({
  name: "Atividades"
});

/**
 * Retorna todos os itens da base de atividades
 *
 * @return {Array.<Object>} todas as atividades
 */
const index = async () => {
  try {
    let activities = [];
    await activitiesStore.iterate(function (value, key) {
      activities.push({ id: key, value });
    });
    return activities;
  } catch (err) {
    console.log(err);
  }
}

/**
 * Cria uma atividade na "base de dados"
 *
 * @param {object} data Objeto com dados da atividade, e.g: {name: 'Atividade'}
 * @return {object} Retorna o item criado.
 */
const create = async (data) => {
  try {
    const { name } = data;
    const keys = await activitiesStore.keys();
    const uniqueID = keys.length > 0 ? Number(keys[keys.length - 1]) + 1 : 1;
    // TODO: Trocar aqui para salvar o data do objeto somente, e não a concatenação
    await activitiesStore.setItem(uniqueID, { name: `${name} ${uniqueID}` });
    return await activitiesStore.getItem(uniqueID);
  } catch (err) {
    console.log(err);
  }
}

/**
 * Retorna uma atividade da "base de dados"
 *
 * @param {string} id ID do objeto a ser buscado, e.g: '1'
 * @return {object} Retorna o item criado.
 */
const show = async (id) => {
  try {
    const item = await activitiesStore.getItem(id);
    return item;
  } catch (err) {
    console.log(err);
  }
}

/**
 * Remove uma atividade da "base de dados"
 *
 * @param {string} id ID do objeto a ser apagado, e.g: '1'
 * @return {string} Retorna o ID do item apagado.
 */
const destroy = async (id) => {
  try {
    await activitiesStore.removeItem(id);
    return id;
  } catch (err) {
    console.log(err);
  }
}

export { index, show, create, destroy }