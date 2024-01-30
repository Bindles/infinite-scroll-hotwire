<div id="<%= dom_id product %>">
  <p class="my-5">
    <strong class="block font-medium mb-1">Name:</strong>
    <%= product.name %>
  </p>

  <p class="my-5">
    <strong class="block font-medium mb-1">Category:</strong>
    <%= product.category %>
  </p>

  <p class="my-5">
    <strong class="block font-medium mb-1">Desc:</strong>
    <%= product.desc %>
  </p>

  <% if action_name != "show" %>
    <%= link_to "Show this product", product, class: "rounded-lg py-3 px-5 bg-gray-100 inline-block font-medium" %>
    <%= link_to "Edit this product", edit_product_path(product), class: "rounded-lg py-3 ml-2 px-5 bg-gray-100 inline-block font-medium" %>
    <hr class="mt-6">
  <% end %>
</div>