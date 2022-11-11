import React from 'react';
import {
  Create,
  CreateProps,
  ImageField,
  ImageInput,
  NumberInput,
  SaveButton,
  SimpleForm,
  TextInput,
  Toolbar,
} from 'react-admin';

const ProductCreateToolbar = () => {
  return (
    <Toolbar>
      <SaveButton label="Добавить" />
    </Toolbar>
  );
};

const ProductCreate = (props: CreateProps) => {
  return (
    <Create title="Добавить товар" {...props}>
      <SimpleForm toolbar={<ProductCreateToolbar />}>
        <TextInput source="title" label="Название продукта" />
        <TextInput multiline source="description" label="Описание" />
        <NumberInput source="price" label="Цена" />
        <ImageInput
          source="preview"
          label="Выберите файл"
          placeholder={
            <p style={{ border: '1px solid #ac0000', padding: 10 }}>Добавить фотографию</p>
          }
        >
          <ImageField
            source="src"
            title="title"
            sx={{
              maxWidth: 500,
              maxHeight: 500,
              '& img': { width: '100% !important', height: '100% !important' },
            }}
          />
        </ImageInput>
      </SimpleForm>
    </Create>
  );
};

export default ProductCreate;
