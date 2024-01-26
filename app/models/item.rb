class Item < ApplicationRecord
  enum access: {
    draft: 'draft',
    published: 'published',
    passcode_protected: 'passcode_protected'
  }
  validates :body, presence: true
  validates :access, presence: true
  validates :pass, presence: true, if: :passcode_protected?
end