import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const selectedGoodInfo = selectedGood
    ? `${selectedGood} is selected`
    : 'No goods selected';

  const onReset = () => setSelectedGood('');

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGoodInfo}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={onReset}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map((good, index) => {
            const isSelected = selectedGood === good;
            const selectValidation = isSelected ? '' : good;
            const signChangeValidation = isSelected ? '-' : '+';

            return (
              // eslint-disable-next-line react/no-array-index-key
              <tr
                data-cy="Good"
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className={cn({ 'has-background-success-light': isSelected })}
              >
                <td>
                  <button
                    data-cy="AddButton"
                    type="button"
                    className="button"
                    onClick={() => {
                      setSelectedGood(selectValidation);
                    }}
                  >
                    {signChangeValidation}
                  </button>
                </td>

                <td data-cy="GoodTitle">{good}</td>
              </tr>
            );
          })}
          {/* <tr data-cy="Good">
            <td>
              <button data-cy="AddButton" type="button" className="button">
                +
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Dumplings
            </td>
          </tr>

          <tr data-cy="Good" className="has-background-success-light">
            <td>
              <button
                data-cy="RemoveButton"
                type="button"
                className="button is-info"
              >
                -
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Jam
            </td>
          </tr>

          <tr data-cy="Good">
            <td>
              <button data-cy="AddButton" type="button" className="button">
                +
              </button>
            </td>

            <td data-cy="GoodTitle" className="is-vcentered">
              Garlic
            </td>
          </tr> */}
        </tbody>
      </table>
    </main>
  );
};
